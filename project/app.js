const phoneHunter = async (searchText = "13", isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  displayPhone(data?.data, isShowAll);
};

/*
1. catch the div 
2. find the elements or phone data using the foreach loop
3. create a div
4. push the value when we create the div value using appendChild method
*/

const displayPhone = (phones, isShowAll) => {
  const pushDiv = document.getElementById("phone-container");
  pushDiv.textContent = "";

  //   showAll data if they are exist
  const showData = document.getElementById("show-all");
  if (phones.length > 12 && !isShowAll) {
    showData.classList.remove("hidden");
  } else {
    showData.classList.add("hidden");
  }

  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    const creatDiv = document.createElement("div");
    creatDiv.classList = "card bg-gray-100 w-96 shadow-xl my-5  mx-auto";

    creatDiv.innerHTML = `
                    <figure>
    <img class="mt-8"
      src="${phone.image}" />
  </figure>
  <div class="card-body">
  <h2>${phone.brand}</h2>
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions justify-center">
      <button onclick="showAllDatta('${phone.slug}');
      " class="btn btn-primary ">Show All</button>
    </div>
  </div>
                `;
    pushDiv.appendChild(creatDiv);
  });
  loadingSpinner(false);
};

const inPutData = (isShowAll) => {
  loadingSpinner(true);
  const collectData = document.getElementById("input-Data");
  const dataH = collectData.value;
  phoneHunter(dataH, isShowAll);
};

const loadingSpinner = (isloading) => {
  const loadingS = document.getElementById("loading-sping");
  if (isloading) {
    loadingS.classList.remove("hidden");
  } else {
    loadingS.classList.add("hidden");
  }
};

const showLLdata = () => {
  inPutData(true);
};

// phoneHunter();

// when i click showAll button then open a new document then show the dateils
const showAllDatta = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await res.json();
  const phone = data?.data;
  showDetails(phone);
};

const showDetails = (phone) => {
  const showDetaileData = document.getElementById("show-all-container");
  showDetaileData.innerHTML = `<h1 class="text-3xl font-bold">${phone.name}</h1>
  <img class="mt-4"
      src="${phone.image}" />

      <p>Slug :- ${phone.slug} </p>
      <p>Storage :- ${phone.mainFeatures.storage} </p>
      <p>DisplaySize :- ${phone.mainFeatures.displaySize} </p>
      <p>ChipSet :- ${phone.mainFeatures.chipSet} </p>
      <p>Memory :- ${phone.mainFeatures.memory} </p>
      <p>Sensors :- ${phone.mainFeatures.sensors} </p>
      <p>Compass :- ${phone.mainFeatures.compass} </p>
  
  
  
  `;

  my_modal_5.showModal();
};

phoneHunter();
