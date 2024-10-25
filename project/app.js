const phoneHunter = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );

  const data = await res.json();
  displayPhone(data?.data);
};

/*
1. catch the div 
2. find the elements or phone data using the foreach loop
3. create a div
4. push the value when we create the div value using appendChild method
*/

const displayPhone = (phones) => {
  const pushDiv = document.getElementById("phone-container");
  pushDiv.textContent = "";
  phones.forEach((phone) => {
    const creatDiv = document.createElement("div");
    creatDiv.classList = "card bg-gray-100 w-96 shadow-xl my-5  mx-auto";

    creatDiv.innerHTML = `
                    <figure>
    <img
      src="${phone.image}" />
  </figure>
  <div class="card-body">
  <h2>${phone.brand}</h2>
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
                `;
    pushDiv.appendChild(creatDiv);
  });
};

const inPutData = () => {
  const collectData = document.getElementById("input-Data");
  const dataH = collectData.value;
  phoneHunter(dataH);
};

// phoneHunter();
