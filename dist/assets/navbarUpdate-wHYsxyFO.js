const r=`
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="./images/logo.png" alt="logo" />
        <p>
          Welcome to Shopiverse, <br />
          your ultimate destination for
          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Payment Method </a>
        <a href="" target="_blank"> Delivery </a>
        <a href="" target="_blank"> Return and Exchange </a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Copyright © 2025 Shopiverse</p>
      </div>
    </div>
  </footer>`,s=document.querySelector(".section-footer");s.insertAdjacentHTML("afterbegin",r);const p=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:999.99,stock:50,description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",image:"../images/lapi.png"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:499.99,stock:100,image:"../images/iphone.png",description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/headphone.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:199.99,stock:20,image:"../images/watch.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/speakers.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:6,name:"Television",category:"Video",brand:"Samsung",price:199.99,stock:20,image:"../images/tv.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:7,name:"QLED Curved Monitor",category:"Computing",brand:"Alienware",price:1499,stock:10,image:"../images/tv.png",description:"49-inch ultrawide 144Hz curved gaming monitor with Quantum Dot technology, 1ms response time, and stunning HDR support for an immersive battlefield."},{id:8,name:"Foldable Smartphone",category:"Mobile",brand:"Google",price:1799.99,stock:30,image:"../images/iphone.png",description:"Innovative folding phone with a seamless dual-screen display, powerful Tensor chip, and a revolutionary multi-tasking experience."},{id:9,name:"Creator Ultrabook",category:"Computing",brand:"Microsoft",price:2150.5,stock:22,image:"../images/laptop.png",description:"Slim and lightweight laptop designed for creative professionals, featuring a vibrant touch display, dedicated GPU, and long-lasting battery life."},{id:10,name:"Studio Microphones",category:"Audio",brand:"Blue Yeti",price:129.99,stock:90,image:"../images/headphone.png",description:"Professional-grade USB condenser microphone with four pattern settings (Cardioid, Omnidirectional, Bidirectional, Stereo) for podcasting and streaming."},{id:11,name:"Rugged Outdoor Watch",category:"Wearable",brand:"Garmin",price:349,stock:75,image:"../images/watch.png",description:"GPS smartwatch built to military standards for thermal, shock, and water resistance, complete with tactical and navigation features."}],c=document.querySelector("#cartValue"),d=e=>c.innerHTML=` <i class="fa-solid fa-cart-shopping"> ${e.length} </i>`,g=()=>{let e=localStorage.getItem("cartProductLS");return e?(e=JSON.parse(e),d(e),e):[]};function m(e,n){const a=document.createElement("div");a.classList.add("toast"),e==="add"?a.textContent=`Product with ID ${n} has been added.`:a.textContent=`Product with ID ${n} has been deleted.`,document.body.appendChild(a),setTimeout(()=>{a.remove()},2e3)}const i=document.getElementById("userNameDisplay"),t=document.getElementById("logoutButton"),o=document.querySelector(".sing_in_up");function l(){const e=localStorage.getItem("loggedInUser");i&&(i.style.display="none"),t&&(t.style.display="none"),o&&(o.style.display=""),e&&(i.querySelector("a").textContent=`Hi, ${e}!`,i&&(i.style.display="list-item"),t&&(t.style.display="list-item"),o&&(o.style.display="none"))}t&&t.addEventListener("click",e=>{e.preventDefault(),localStorage.removeItem("loggedInUser"),alert("You have been logged out successfully!"),window.location.href="index.html"});l();export{g,p,m as s,d as u};
