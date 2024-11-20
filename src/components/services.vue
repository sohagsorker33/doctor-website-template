<template>
    <div class="mt-12 text-center">
        <div class="space-y-5">
            <p><span class="half-underline font-serif">Why Choose </span> Dr. Vivekananda</p>
            <br>
            <p class="font-sans text-1xl leading-7 text-[#5B8291]">
                Dr. Vivekananda’s work ethic is a blend of professionalism,passion for the craft, skill and dexterity.
                <br />
                He is extremely cooperative and is vigilant throughout the process makes him highly <br />
                responsible and trustworthy as an orthopaedicia.
            </p>
            <p class="font-sans text-1xl leading-7 text-[#5B8291]">
                Dr. Vivekananda received extensive training in knee surgeries and attained proficiency in performing
                <br>
                Knee Arthroscopy and Knee Replacement Surgeries. He holds 9 years experience in orthopaedics <br />
                under the guidance of world-class knee replacement surgeons especially in Minimally Invasive Knee <br />
                Replacement Surgery and Fast Track Knee Replacement.
            </p>
            <p class="font-sans text-1xl leading-7 text-[#5B8291]">He offers expert care for all orthopaedic trauma cases
            </p>
        </div>
    </div>

    <div class="space-x-6 flex justify-center mt-10">
        <!-- Card 1 -->
        <div class="max-w-sm p-4 bg-[#E8E8E8] border rounded">
            <a href="#">
                <img class="rounded-t-lg" src="../assets/images/image1.jpg" alt="" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold font-mono ">
                    Knee
                    Arthroscopy</h5>
                <p class="mb-3 font-thin mt-6 text-[#5B8291]">
                    Knee arthroscopy is a minimally invasive procedure of diagnosing several knee problems such as torn
                    meniscus, a misaligned patella, or even repair ligaments of the joint. It allows surgeons to observe
                    the knee joint without any large incisions.
                </p>
            </div>
        </div>
        <!-- Card 2 -->
        <div class="max-w-sm p-5 bg-[#E8E8E8] border rounded">
            <a href="#">
                <img class="rounded-t-lg" src="../assets/images/image2.jpg" alt="" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold font-mono">
                    Total hip
                    Replacement</h5>
                <p class="mb-3 font-thin mt-6 text-[#5B8291]">
                    Total Hip Replacement is used to treat degenerative arthritis in the hip joint. During the surgical
                    procedure, both damaged surfaces of the hip joint are replaced with a prosthetic joint.
                </p>
            </div>
        </div>
        <!-- Card 3 -->
        <div class="max-w-sm p-5 bg-[#E8E8E8] border rounded">
            <a href="#">
                <img class="rounded-t-lg" src="../assets/images/image2.jpg" alt="" />
            </a>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold font-mono">
                    Total Knee
                    Replacement</h5>
                <p class="mb-3 font-thin mt-6 text-[#5B8291]">
                    Total knee replacement is a surgical intervention for those with diseased knees to be replaced with
                    artificial material typically metal lining to restore the joint functionality.
                </p>
            </div>
        </div>
    </div>
    <!-- button-->
    <div class="flex justify-center relative bottom-4">
        <button class="bg-[#2E424D]  p-3 rounded mt-16">
            <a href="/" class="text-[#5B8291] p-4  hover:text-white">View More</a>
        </button>
    </div>
    <!-- text image-->
    <div class=" mt-8">
        <section class="bg-gray-300 px-40">
            <div class="flex justify-around pt-14 pb-8">
                <img class="w-60 h-32" src="../assets/images/logo1.png" />
                <img class="w-60 h-32" src=" ../assets/images/logo2.png" />
                <img class="w-60 h-32" src="../assets/images/logo3.png" />
            </div>
            <div class="flex justify-around pb-14">
                <img class="w-60 h-32" src="../assets/images/logo4.png" />
                <img class="w-60 h-32" src="../assets/images/logo5.png" />
            </div>
        </section>
    </div>

    <div class="flex justify-center min-h-screen bg-no-repeat bg-[url('../assets/images/research2.jpg')] ">
        <div class="text-center text-[#EAEBED] font-sans  text-[22px]">
            <p class="mt-32  tracking-wider leading-10">
                I consulted Dr.Vivekananda Bheemisetty regarding multiple <br />injuries to my leg as the pain was not
                reducing. He was <br /> very patient with checking my reports and examining my <br /> injury, and he
                spent a good amount of time explaining the <br /> injury and suggesting a course of action. Not every
                doctor <br /> spends this amount of time on every single patient, which <br /> is great and keeps him on
                top when it comes to <br />interactions with patients. I would recommend this doctor<br /> without
                thinking twice. Overall, it's been a great experience.
            </p>
            <hr class="w-40 mt-20 mx-72">
            <p>Harsh Vardhan</p>
        </div>

    </div>

    <p></p>


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
