 <template>
     <div class=" relative bottom-32">
         <div class="min-h-screen flex justify-center  bg-no-repeat text-white bg-[url('../assets/images/carousel-1.jpg')] ">
             <div class="mt-56 flex space-x-36   text-center text-3xl font-serif">
                 <div class="space-y-7">
                     <Icon name="mage:users-fill" class="text-9xl" />
                     <p>1200</p>
                     <p>Surgeries</p>
                 </div>
                 <div class="space-y-7">
                     <Icon name="healthicons:doctor-female-outline" class="text-9xl" />
                     <p>1500</p>
                     <p>Cases</p>
                 </div>
                 <div class="space-y-7">
                     <Icon name="material-symbols:account-circle-full" class="text-9xl" />
                     <p>3</p>
                     <p>Countrie</p>
                 </div>
             </div>
         </div>
     </div>

     <div class=" relative bottom-16">
         <div class="flex">
             <img src="../assets/images/doctor_man.jpg" class="w-48 mx-32" alt="">
             <div class="space-y-7">
                 <p><span class="half-underline font-serif">Areas of</span> Expertise.</p>
                 <br>
                 <p class="font-sans text-2xl leading-10 text-[#5B8291]">10 Years of extensive practice & global
                     exposure has made
                     Dr.Vivekananda <br> Hyderabad’s first choice for orthopaedic care.</p>
             </div>
         </div>
         <div class="flex mx-96 -space-x-9  text-[#5B8291] font-thin">
             <Icon name="rivet-icons:check-circle-solid" class="text-2xl text-[#5B8291] mx-16" />
             <p>Primary and Revision knee Replacement Surgeries</p>
         </div>
         <br />
         <div class="flex mx-96 -space-x-9  text-[#5B8291] font-thin ">
             <Icon name="rivet-icons:check-circle-solid" class="text-2xl text-[#5B8291] mx-16" />
             <p>Primary and Revision Hip Replacement Surgeries</p>
         </div>
         <br />
         <div class="flex mx-96 -space-x-9  text-[#5B8291] font-thin ">
             <Icon name="rivet-icons:check-circle-solid" class="text-2xl text-[#5B8291] mx-16" />
             <p>Specialises in Minimally Invasive Knee Replacement
                 Surgeries</p>
         </div>
         <br />
         <div class="flex mx-96 -space-x-9  text-[#5B8291] font-thin ">
             <Icon name="rivet-icons:check-circle-solid" class="text-2xl text-[#5B8291] mx-16" />
             <p>Osteotomies around the knee joint & Realignment o
                 Knee</p>
         </div>
         <br />
         <div class="flex mx-96 -space-x-9  text-[#5B8291] font-thin ">
             <Icon name="rivet-icons:check-circle-solid" class="text-2xl text-[#5B8291] mx-16" />
             <p>Orthopaedic Trauma treatment - Fractures</p>
         </div>
         <br />
         <div class="flex mx-96 -space-x-9  text-[#5B8291] font-thin ">
             <Icon name="rivet-icons:check-circle-solid" class="text-2xl text-[#5B8291] mx-16" />
             <p>Paediatric Trauma treatment</p>
         </div>
         <div class="flex justify-center">
             <button class="bg-[#2E424D]  p-3 rounded mt-16"><a href="/"
                     class="text-[#5B8291] p-4  hover:text-white">Read More</a></button>
         </div>


     </div>
     <div class="bg-[#D9D9D9] h-[250px]">
         <div class="text-[#5B8291]">
                <div class="flex">
                     <p class="text-1xl mt-28 mx-40 font-thin space-y-14">In case of EMERGENCY, call +91 9701757017</p>
                </div>
              <div class="flex justify-end -mt-40">
                <a href="#"
                 class="w-56 p-6 h-10 mt-28 rounded  mx-40  bg-[#2E424D] inline-flex items-center">OR SEND US MESSAGE
                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                 </svg>
             </a>
              </div>
         </div>
     </div>

     
 </template>

 <style scoped>
     .half-underline {
         display: inline-block;
         position: relative;
         padding-bottom: 4px;

     }

     .half-underline::before {
         content: '';
         position: absolute;
         bottom: 0;
         left: 0;

         width: 100%;
         height: 2px;
         background-color: #98DAD9;
         transform-origin: top;
         transform: scaleY(0.5);
     }
     
 </style>
