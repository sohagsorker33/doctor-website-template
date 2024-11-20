<template>
    <div class=" bg-[#1F1F1F]">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm p-4 bg-[#617C8B] text-[#98DAD9]">
                <ul role="list" class=" my-7">
                    <li class="flex items-center">
                        <Icon name="material-symbols:location-away" class="text-3xl  text-[#1e566d] mx-10" />
                        <p class="font-sans">Find a clinic near you <br />
                            <span class="text-2xl">Find Us On Map</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="w-full max-w-sm p-4 bg-[#466774] text-[#98DAD9]">
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <Icon name="mdi:email-open-outline" class="text-3xl  text-[rgb(191,218,215)] mx-10" />
                        <p class="font-sans">Find a clinic near you <br />
                            <span class="text-2xl">Find Us On Map</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="w-full max-w-sm p-4 bg-[#30515E] text-[#98DAD9]">
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <Icon name="material-symbols:call" class="text-4xl text-[#98DAD9] mx-10" />
                        <p class="font-sans">
                            To book an<br />
                            appointment, call us<br />
                            on<br />
                            +91 9701757017
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm p-4   text-[#98DAD9]">
                <p class="text-2xl font-thin"><span class="half-underline mx-2">About</span>us</p>
                <ul role="list" class="space-y-16 my-7">
                    <li class="flex mx-5 items-center space-x-3">
                        <p class="font-sans">Dr. Vivekananda is one of the best orthopaedic surgeons in Hyderabad
                            rendering expert treatment in replacement surgeries, bone trauma diagnosis and holds
                            in-depth knowledge in pathologies around knee & hip joint, treatment and concerned
                            surgeries.</p>
                    </li>
                </ul>
            </div>
            <div class="w-full max-w-sm p-4   text-[#98DAD9]">
                <p class="text-2xl font-thin"><span class="half-underline mx-2">Get in Touch </span>Us</p>
                <ul role="list" class="space-y-16 my-7">
                    <li class="flex items-center space-x-4 relative bottom-4">
                        <Icon name="material-symbols:location-away"
                            class="text-6xl relative bottom-5 text-[rgb(191,218,215)]" />
                        <p class="font-sans"> Flat no 101, Madhura Heights, 1st floor, opposite Bank of Baroda, Rajeev
                            Nagar, Hyderabad, Telangana – 500018 .
                        </p>
                    </li>
                    <li class="flex items-center space-x-4 relative bottom-4">
                        <Icon name="mdi:email-open-outline"
                            class="text-2xl relative bottom-5 text-[rgb(191,218,215)]" />
                        <a href="https://dr.b.vivekananda@gmail.com"
                            class="relative bottom-5 underline">dr.b.vivekananda@gmail.com</a>
                    </li>
                    <li class="flex items-center space-x-4 relative bottom-12">
                        <Icon name="material-symbols:call" class="text-2xl relative bottom-5 text-[rgb(191,218,215)]" />
                        <p class="relative bottom-5 underline">+91 9701757017</p>
                    </li>
                </ul>
            </div>

            <div class="w-full max-w-sm p-4   text-[#98DAD9]">
                <p class="text-2xl font-thin"><span class="half-underline mx-2">Additional</span>Link</p>
                <ul role="list" class="space-y-16 my-7">
                    <li class="flex mx-5 items-center space-x-3">
                        <Icon name="mdi:arrow-right-thin" class="text-3xl text-[rgb(191,218,215)]" />
                        <p class="font-sans">Core Clinic</p>
                    </li>
                    <li class="flex mx-5 items-center space-x-3 relative bottom-12">
                        <Icon name="mdi:arrow-right-thin" class="text-3xl text-[rgb(191,218,215)]" />
                        <p class="font-sans">Service</p>
                    </li>
                    <li class="flex mx-5 items-center space-x-3 relative bottom-24">
                        <Icon name="mdi:arrow-right-thin" class="text-3xl text-[rgb(191,218,215)]" />
                        <a href="" class="font-sans">About</a>
                    </li>
                    <li class="flex mx-5 items-center space-x-3 relative bottom-36">
                        <Icon name="mdi:arrow-right-thin" class="text-3xl text-[rgb(191,218,215)]" />
                        <a href="" class="font-sans">Contact</a>
                    </li>
                </ul>
            </div>
        </div>


        <p class=" text-[#5B8291] text-center font-sans text-3xl relative bottom-24  "><span
                class="half-underline mx-4">Scheduled</span>An Appointment</p>
        <form action="#">
            <div class="flex justify-center relative bottom-10 my-6">
                <input class="p-1 w-60 mx-4 focus:outline-none border-b-2 border-b-yellow-900 text-gray-600" type="text"
                    placeholder="Frist Name">
                     <input class="p-1 w-60 mx-4 focus:outline-none border-b-2 border-b-yellow-900 text-gray-600" type="text"
                    placeholder="Last Name">   
            </div>
            <div class="flex justify-center relative bottom-10">
                <input class="p-1 w-60 mx-4 focus:outline-none border-b-2 border-b-yellow-900 text-gray-600" type="text"
                    placeholder="Phone Number">
                     <input class="p-1 w-60 mx-4 focus:outline-none border-b-2 border-b-yellow-900 text-gray-600" type="text"
                    placeholder="Email">   
            </div>
             <div class="flex justify-center relative bottom-16">
                <a href="#"
                 class="rounded text-[#5B8291]  hover:text-white mt-24 p-3 w-52 justify-center bg-[#2E424D] inline-flex items-center">Submit
                 <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                     <path d="M5 12h14M12 5l7 7-7 7"></path>
                 </svg>
             </a>
              </div>
        </form>
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
