const data = (req,res)=>{
   return res.send([

    // phone 
    
        {
            id : 1,
            image : "https://idestiny.in/wp-content/uploads/2023/09/iPhone_15_Green_PDP_Image_Position-2__WWEN.jpg",
            name : "Apple iPhone 15 Plus (Blue, 128 GB)",
            price : "₹76,999",
            description : "Experience the iPhone 15 Plus – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, its USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 Plus – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
            rating : "4.6*",
            category : "iphone"
        },
        {
            id : 2,
            image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-storage-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692924212833",
            name : "Apple iPhone 15 (Black, 128 GB)",
            price : "₹66,999",
            description : "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
            rating : "4.5*",
            category : "iphone"
        },
        {
            id : 3,
            image : "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UF1000,1000_QL80_.jpg",
            name : "Apple iPhone 15 Pro (Blue Titanium, 128 GB)",
            price : "₹1,30,990",
            description : "iPhone 15 Pro, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro.",
            rating : "4.7*",
            category : "iphone"
        },
        {
            id : 4,
            image : "https://d2xamzlzrdbdbn.cloudfront.net/products/89670ae0-44c0-4b4b-876e-0cbf1ce7478123161053.jpg",
            name : "Apple iPhone 15 Pro Max (256 GB)",
            price : "₹1,56,900",
            description : "iPhone 15 Pro Max, a titanium marvel, boasts an aerospace-grade build, making it the lightest Pro model ever. The A17 Pro Chip marks a historic leap in Apple GPUs, delivering unparalleled graphics performance and immersive gaming experiences. The camera system shines with a 48 MP Main camera, offering remarkable detail and automatic portrait enhancements. Convenience is key with the Action button for quick tasks and Focus filters. Plus, it's USB 3 compatible, revolutionizing data transfer speeds. This iPhone even shares its charging cable with your Mac or iPad. Embrace innovation, cut cable clutter, and elevate your mobile experience with the iPhone 15 Pro Max.",
            rating : "4.7*",
            category : "iphone"
        },
        // ipad 
        {
            id : 5,
            category : "ipad",
            image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/tablet/k/w/w/-original-imagj73ypffqjk6s.jpeg?q=90&crop=false",
            name : "Apple iPad Pro (6th Gen) 512 GB ROM 12.9 inch with Wi-Fi+5G (Silver)",
            price : "₹1,53,148",
            description : "The 11-inch display gives you an immersive and portable experience. And the 12.9-inch XDR display is a stunning and expansive way to view HDR content.",
            rating : "4.6*"
        },
        {
            id : 6,
            category : "ipad",
            image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10th-gen-engraving-select-202212-silver-wifi?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1667593405047",
            name : "Apple iPad (10th Gen) 256 GB ROM 10.9 inch with Wi-Fi Only",
            price : "₹54,900",
            description : "WHY IPAD — Colourfully reimagined and more versatile than ever, iPad is great for the things you do every day. With an all-screen design, 27.69 cm (10.9″) Liquid Retina display, powerful A14 Bionic chip, superfast Wi-Fi and four gorgeous colours, iPad delivers a powerful way to create, stay connected and get things done.",
            rating : "4.6*"
        },
        {
            id : 7,
            category : "ipad",
            image : "https://rukminim2.flixcart.com/image/850/1000/xif0q/tablet/l/v/b/-original-imagj72vqgydzs3m.jpeg?q=90&crop=false",
            name : "Apple iPad Pro (4th Gen) 2 TB ROM 11.0 inch with Wi-Fi Only (Space Grey)",
            price : "₹1,86,124",
            description : "iPadOS + APPS — iPadOS makes iPad more productive, intuitive and versatile. With iPadOS, run multiple apps at once, use Apple Pencil to write in any text field with Scribble, and edit and share photos. Stage Manager makes multitasking easy with resizable, overlapping apps and external display support. iPad Pro comes with essential apps like Safari, Messages and Keynote, with over a million more apps available on the App Store.",
            rating : "4.7*"
        },
        // macbook 
        {
            id : 8,
            category : "macbook",
            image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbookair-og-202306?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1683844743095",
            name : "Apple 2023 MacBook Air Laptop",
            price : "₹1,7,566",
            description : "IMPRESSIVELY BIG, IMPOSSIBLY THIN — The 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. The durable 100% recycled aluminium enclosure is strikingly thin and light.SUPERCHARGED BY M2 — Get more done faster with a powerful 8-core CPU, 10-core GPU and up to 24GB of unified memory.",
            rating : "4.5*"
        },
        {
            id : 9,
            category : "macbook",
            image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
            name : "Apple 2022 MacBook Air Laptop",
            price : "₹1,14,900",
            description : "STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.SUPERCHARGED BY M2 – Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.",
            rating : "4.6*"
        },
        {
            id : 10,
            category : "macbook",
            image : "https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_UF1000,1000_QL80_.jpg",
            name : "Apple 2022 MacBook Air Laptop with M2 chip",
            price : "₹1,49,645",
            description : "STRIKINGLY THIN DESIGN – The redesigned MacBook Air is more portable than ever and weighs just 1.24 kg (2.7 pounds). It’s the ultra-capable laptop that lets you work, play or create just about anything — anywhere.SUPERCHARGED BY M2 – Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory.",
            rating : "4.8*"
        },

        // camera 

        {
            id : 11,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71m-zkZTbML._SL1500_.jpg",
            name : "Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit + SanDisk 128GB Extreme Pro SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card",
            price : "₹59,999",
            description : "Product 1: Sensor: Full frame CMOS sensor with 30.4 MP (brilliant resolution for large prints and image cropping);Product 1: ISO: 100-32000 sensitivity range (critical for obtaining grain-free pictures, especially in low light), Canon Log CapabilityProduct 1: Image Processor: DIGIC 6+ with 61 autofocus points (important for speed and accuracy of autofocus and burst photography);Product 1: Video Resolution: 4K video with fully manual control and selectable frame rates (excellent for precision and high-quality video work)",
            rating : "4.5*"
        },
        {
            id : 12,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61cBZ5Z+ekL._SX569_.jpg",
            name : "Nikon Z50 Mirrorless Optical Zoom Camera with Z DX 16-50mm f/3.5-6.3 VR Lens with Additional Battery (Black)",
            price : "₹69,999",
            description : "Effective pixels: 20.9million Automatically switches between monitor and viewfinder displays Image Dust Off reference data (requires Capture NX-D) DX.CMOS",
            rating : "4.1*"
        },
        {
            id : 13,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/614kzkELwmL._SX569_.jpg",
            name : "Nikon Z50 Mirrorless Camera with Z DX 16-50mm f/3.5-6.3 VR & Z DX 50-250mm f/4.5-6.3 VR Lens with Additional Battery",
            price : "₹91,999",
            description : "20.9MP DX-Format CMOS Sensor and EXPEED 6 Image Processor UHD 4K video recording at up to 30 fps and Full HD recording at up to 120 fps Up to 11 fps shooting with AE/AF, 5 fps with live view;3.2 1.04m-dot LCD screen and has a 180° flip-under tilting design In the Box: Nikon Z50, Nikkor Z DX 16-50mm, Strap, Battery, Charger, USB Cable Photo Sensor Technology: Ccd;Wireless Communication Technology: Wi-Fi",
            rating : "4.5*"
        },
        {
            id : 14,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/81lghf1fdzL._AC_UL480_FMwebp_QL65_.jpg",
            name : "Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm & 55-210 mm Zoom Lenses, APS-C Sensor",
            price : "₹78,998",
            description : "Real time eye AF for still + Animal Eye AF;Real time tracking World fastest 0.02 Sec AF speed with 425 phase detection and contrast points;24.2MP, EXMOR CMOS sensor with outstanding light sensitivity 11 FPS continuous shooting with AF/AE;180 degree tilt able touch LCD screen ISO sensitivity up to 102400;High resolution, sensitivity and colour reproduction capability;Smooth and stable AF;Country of Origin: China",
            rating : "4.5*"
        },
        {
            id : 15,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/41SZU5t4f1L._SY300_SX300_QL70_FMwebp_.jpg",
            name : "Sony Alpha ZV-E10L 24.2 Mega Pixel Interchangeable-Lens Mirrorless vlog Optical zoom Camera with 16-50mm Lens,for Creators(APS-C Sensor,Advanced Autofocus,Clear Audio,4K Movie Recording)-Black,Compact",
            price : "₹61,999",
            description : "Interchangeable-lens camera for vlogging Large APS-C type 24.2-megapixel28 Exmor CMOS sensor Directional 3-Capsule Mic supplied with wind screen Features designed for vloggers—Product Showcase Setting, Bokeh Switch, Still/Movie/S&Q button; Flexible connectivity for easy sharing Compatible Mountings: Sony E",
            rating : "4.5*"
        },
        {
            id : 16,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71-E+cXcs1L._AC_UL480_FMwebp_QL65_.jpg",
            name : "Sony Alpha ILCE-6400M 24.2MP Mirrorless Digital SLR Camera (Black) with 18-135mm Zoom Lens | APS-C Sensor ",
            price : "₹1,02,998",
            description : "Real time eye AF and real time tracking;World fastest 0.02 Sec AF speed with 425 phase detection and contrast points 24.2MP, EXMOR CMOS sensor with outstanding light sensitivity;11 FPS continuous shooting with AF/AE 180 degree tilt able touch LCD screen;ISO sensitivity up to 102400; High resolution, sensitivity and colour reproduction capability;Smooth and stable AF Durability for up to 200,000 shutter cycles;HLG(hybrid log Gamma ) support for instant HDR workflow Compatible Mountings: Sony E",
            rating : "5.6*"
        },
        {
            id : 17,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71+BoGlMR1L._AC_UL480_FMwebp_QL65_.jpg",
            name : "Sony Alpha ILCE-6400L 24.2MP Mirrorless Camera (Black) with 16-50mm Power Zoom Lens (APS-C Sensor, Real-Time Eye Auto Focus",
            price : "₹99,028",
            description : "Product 1: Real time eye AF and real time tracking;World fastest 0.02 Sec AF speed with 425 phase detection and contrast points ; Operating Temperature: 32 - 104 degrees F / 0 - 40 degrees C ; Performance Features: Fast hybrid autofocus allows for rapid, accurate subject tracking for great photographic experience ; Connectivity: Wi-Fi/NFC/HDMI/USB/Bluetooth Product 1: 24.2MP, EXMOR CMOS sensor with outstanding light sensitivity;11 FPS continuous shooting with AF/AE",
            rating : "4.1*"
        },
        {
            id : 18,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/617aIxkbkBL._AC_UL480_FMwebp_QL65_.jpg",
            name : "Sony Alpha ILCE-7CL with 28-60mm Zoom Lens | Compact Full Frame Camera | 4K with Flip Screen, Light Weight ",
            price : "₹1,51,998",
            description : "The world's smallest and lightest compact body, with no-compromise full-frame camera performance;Powerful BIONZ X image processing for spectacular image quality Advanced AF performance and functions;High-resolution 4K movies and a wealth of expression-expanding movie functions Vari-angle LCD monitor for comfortable movie shooting 2 Year standard warranty + 1 year extended warranty on registration on alpha community Photo Sensor Technology: Cmos;Wireless Communication Technology: Bluetooth;Hardware Interface: Bluetooth",
            rating : "4.5*"
        },
        {
            id : 19,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61HKoTvq1iL._SX569_.jpg",
            name : "Sony Alpha ILCE-6400M 24.2MP Mirrorless Digital SLR Camera (Black) with 18-135mm Power Zoom Lens (APS-C Sensor, Real-Time Eye Auto Focus & FE 70–200 mm F2.8 GM OSS",
            price : "₹1,02,998",
            description : "Product 1: Real time eye AF and real time tracking;World fastest 0.02 Sec AF speed with 425 phase detection and contrast points, 24.2MP, EXMOR CMOS sensor with outstanding light sensitivity;11 FPS continuous shooting with AF/AE, 180 degree tilt able touch LCD screen;ISO sensitivity up to 102400; High resolution, sensitivity and colour reproduction capability;Smooth and stable AF, Durability for up to 200,000 shutter cycles;HLG(hybrid log Gamma ) support for instant HDR workflow",
            rating : "5*"
        },
        {
            id : 20,
            category : "camera",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/914hFeTU2-L._AC_UL480_FMwebp_QL65_.jpg",
            name : "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
            price : "₹44,990",
            description : "Sensor: APS-C CMOS Sensor with 24.1 MP (high resolution for large prints and image cropping). Transmission frequency (central frequency):Frequency: 2 412 to 2 462MHz. Standard diopter :-2.5 - +0.5m-1 (dpt);ISO: 100-12800 sensitivity range (critical for obtaining grain-free pictures, especially in low light)Image Processor: DIGIC 4+ with 9 autofocus points (important for speed and accuracy of autofocus and burst photography);Video Resolution: Full HD video with fully manual control and selectable frame rates (great for precision and high-quality video work)",
            rating : "4.4*"
        },

        // smart watch 

        {
            id : 21,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61QF3E3zFdL._AC_SX679_.jpg",
            name : "Amazfit Bip 3 Pro Smart Watch for Android iPhone, 4 Satellite Positioning Systems, 1.69 Color Display, 14-Day Battery Life, 60+ Sports Modes, Blood Oxygen Heart Rate Monitor, Water-Resistant(Cream)",
            price : "₹5,817",
            description : "【Big on Screen, Big on Style】Immerse yourself in the 1.69 supr-large and colorful HD display, and see all your incoming text and calls in awesome, expansive quality. Express more of yourself with 50 plus watch faces and editable watch faces & widgets - or customize with your own photos..Suported Application:Blood Oxygen Measurement,Heart Rate Monitor,Multisport Tracker,GPS,Social Media. Connectivity technology:Bluetooth.【Explore a Big Open World】The Amazfit Bip 3 Pro smart watch suports 4 satellite positioning systems to help you track your moves through the great outdoors with high precision.",
            rating : "4.5*"
        },
        {
            id : 22,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61kENcORFCL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            name : "Amazfit GTR 3 Smart Watch for Men, 21-Day Battery Life, Alexa Built-in, 150 Sports Modes & GPS, 1.39”AMOLED Display, SpO2 Heart Rate Tracker, Water Resistant, Fitness Watch for Android iPhone, Black",
            price : "₹9,999",
            description : "【ALEXA BUILT-IN AND OFFLINE VOICE ASSISTANT】Easily set an alarm, ask a question, get a translation and more with Alexa, which is built into the Amazfit GTR 3 smart watch. If you’re out and don’t have internet access, the smartwatch also has an offline voice assistant for you to perform operations like engaging a sports mode or opening a health metric feature via voice command. Body material-Aluminum alloy .Suported Application:Breath Monitor,Continuous Heart Rate Monitor,GPS,Voice Control,Multisport Tracking. Connectivity technology:GPS. Wireless comm standard:Bluetooth【21 DAYS LONG-LASTING BATTERY LIFE】The Amazfit GTR 3 activity tracker brings a kind of power and performance that's going to stay with you for a long, long time. Even with the vast array of advanced functions assembled within its slim and light body, the GTR 3 smart watch maintains a refined elegance only found in classic round watches, and yet still finds a way to integrate a powerful battery which can last for upto 21 days.",
            rating : "4.5*"
        },
        {
            id : 23,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71a3ujKr4XL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            name : "Amazfit GTR Smartwatch, 1.39'' AMOLDED Display 24/7 Heart Rate Monitor, 24 Day Batter Life, 12 Sports Modes(47mm, GPS, Bluetooth), Titanium",
            price : "₹13,862",
            description : "Delicate and Elegant Design: Amazfit GTR comes in a classic design with a touch of modern features. It has a brilliant 1.39” AMOLED display, and a gallery of watch faces to choose from to fit any style.12-Sports Modes: Smart sports tracking-includes Smart Sport tracking technology that allows you to record 12 different sports and fitness activities including running, cycling, swimming, mountaineering, etc Full-Scale Heart-Rate Monitoring System: The Amazfit GTR, integrated with the BioTrackerTM PPG biological tracking optical sensor and an algorithm developed by Huami, offers advanced full-scale heart-rate monitoring",
            rating : "4.3*"
        },
        {
            id : 24,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71cANOnqpHL._AC_SX679_.jpg",
            name : "Apple Watch Series 9 [GPS 45mm] Smartwatch with Storm Blue Aluminum Case with Silver Sport Band M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display",
            price : "₹55,999",
            description : "WHY APPLE WATCH SERIES 9 — Your essential companion for a healthy life is now even more powerful. The S9 chip enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health, safety, and activity features provide powerful insights and help when you need it. And redesigned apps in watchOS give you more information at a glance. CARBON NEUTRAL — An aluminum Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral. Learn more about Apple’s commitment to the environment at apple.com/2030.",
            rating : "4.5*"
        },
        {
            id : 25,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71fcQhXazBL._AC_SX679_.jpg",
            name : "Apple Watch Series 9 [GPS 41mm] Smartwatch with Pink Aluminum Case with Pink Sport Loop. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Carbon Neutral",
            price : "₹59,999",
            description : "CARBON NEUTRAL — An aluminum Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral. Learn more about Apple’s commitment to the environment at apple.com/2030. WHY APPLE WATCH SERIES 9 — Your essential companion for a healthy life is now even more powerful. The S9 chip enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health, safety, and activity features provide powerful insights and help when you need it. And redesigned apps in watchOS give you more information at a glance.",
            rating : "4.1*"
        },
        {
            id : 26,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71y49W7qivL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            name : "Military Smart Watch for Men(Call Receive/Dial) with 650mAh Long Battery Life, 2” Big Screen Rugged Tactical Sports Smartwatch with Compass Barometer Heart Rate Sleep Tracker for Android iOS Black",
            price : "₹",
            description : "【2 Large Screen & 650mAh Tactical Smartwatch】 VOPOCO multiple smart watch features fully enclosed ultra-thin case design, a super large 2 screen as the first 9H twin glass cover, it's strong enough to deal with a range of screen-destroying behaviors. In addition, VOPOCO smart sports watch has a built-in 650mAh battery ensuring optimal performance and longevity, which can work for 10-14 days or standby for 30-45 days on a 2-hour full charge. 【Smart Watch with Compass/Elevation/Barometers】 VOPOCO tactical smart watches adds the latest compass function, accurately pinpoint direction to safely find your way through wilderness and in whiteout conditions, which allows you to clearly distinguish all directions even when you are outdoors. Come with a barometric altimeter to help keep an eye on the altitude and air pressure of your outdoor activities.",
            rating : "4.5*"
        },
        {
            id : 27,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61em2RBifsL._AC_UY327_FMwebp_QL65_.jpg",
            name : "SAMSUNG Galaxy Watch 4 40mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth, US Version, SM-R860NZDAXAA, Pink Gold",
            price : "₹14,500",
            description : "BODY COMPOSITION ANALYSIS: Galaxy Watch4 is the first smartwatch to off body composition data right on your wrist, On your own schedule, now you can get readings on body fat, skeletal muscle, body water, basal metabolic rate, and Body Mass Index.Supported Application:Fitness Tracker,GPS,Sleep Monitor. Connectivity technology:Bluetooth. Wireless comm standard:Bluetooth BETTER SLEEP STARTS HERE: Wake up feeling refreshed and recharged with advanced sleep tracking; When you go to bed, your Galaxy Watch4 sleep tracker starts monitoring your sleep and SpO2 levels continuously",
            rating : "4.5*"
        },
        {
            id : 28,
            category : "smartwatch",
            image : "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71yNmp4OnXS._AC_UY327_FMwebp_QL65_.jpg",
            name : "SAMSUNG Galaxy Watch 4 Classic 46mm Smartwatch with ECG Monitor Tracker for Health, Fitness, Running, Sleep Cycles, GPS Fall Detection, Bluetooth, US Version, Silver",
            price : "₹15,792",
            description : "BODY COMPOSITION ANALYSIS: Galaxy Watch4 Classic is the first smartwatch to off body composition data right on your wrist, On your own schedule, now you can get readings on body fat, skeletal muscle, body water, basal metabolic rate, and Body Mass Index BETTER SLEEP STARTS HERE: Wake up feeling refreshed and recharged with advanced sleep tracking; When you go to bed, your Galaxy Watch4 Classic sleep tracker starts monitoring your sleep and SpO2 levels continuously",
            rating : "4.5*"
        },
        {
            id : 29,
            category : "smartwatch",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/m/d/q/-original-imagrgyzvgskz9c7.jpeg?q=70&crop=false",
            name : "Noise Mettle 1.4'' display, Stainless Steel finish with Metal Strap, Bluetooth Calling Smartwatch  (Black Strap, Regular)",
            price : "₹2,199",
            description : "1.4 HD display: A big view to enjoy. Premium metal finish with metallic straps 150+ watch faces- Pick according to your mood. 7-day battery life (2 days with calling) - Stay powered up for longer. NoiseFit app - Your personal coach, fitness community, and wellness partner rolled into one. Complete challenges, compete with friends and earn exclusive offers and rewards. With Call Function",
            rating : "4.2*"
        },
        {
            id : 30,
            category : "smartwatch",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/u/0/q/-original-imaggwbfmnaxz42q.jpeg?q=70&crop=false",
            name : "DIZO Watch D Talk 1.8 display with calling&7 day battery (by realme Techlife)  (Silver Strap, Free Size)",
            price : "₹3,499",
            description : "The DIZO Watch D Talk Smartwatch can monitor your regular activities, including exercise and sports. This smartwatch's 4.57 cm (1.8) screen is designed for easy operation and an engaging experience. Additionally, the enhanced battery and power-saving optimization allow you to work without worrying about battery life. Moreover, owing to its thin metal frame, this smartwatch features a sleek, compact, and exquisite look.",
            rating : "4.2*"
        },

        // fashion 

        {
            id : 31,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70&crop=false",
            name : "Men Regular Fit Solid Spread Collar Casual Shirt",
            price : "₹379",
            description : "Men Regular Fit Solid Spread Collar Casual Shirt,pure cotton",
            rating : "3.2*"
        },
        {
            id : 32,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/kxc5nrk0/shirt/r/h/m/xl-denim-2-greenflair-original-imag9t92swjzsyur.jpeg?q=70&crop=false",
            name : "Men Slim Fit Solid Casual Shirt",
            price : "₹389",
            description : "Men Slim Fit Solid Casual Shirt,pure cotton",
            rating : "3.7*"
        },
        {
            id : 33,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/9/b/s-ausk0578-ausk-original-imagt4syqg7fafzb.jpeg?q=70&crop=false",
            name : "Men Checkered Polo Neck Cotton Blend Dark Blue, White T-Shirt",
            price : "₹279",
            description : "Men Checkered Polo Neck Cotton Blend Dark Blue, White T-Shirt,pure cotton,machine wash",
            rating : "3.8*"
        },
        {
            id : 34,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/i/u/u/-original-imagqtdvnp7swhx6.jpeg?q=70&crop=false",
            name : "Men Slim Fit Beige Polycotton Trousers",
            price : "₹959",
            description : "Men Slim Fit Beige Polycotton Trousers,office wear, machine wash",
            rating : "4*"
        },
        {
            id : 35,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/kfvfwy80-0/shirt/9/x/b/42-8920449-roadster-original-imafw8d3hbdzhnkw.jpeg?q=70&crop=false",
            name : "Men Regular Fit Solid Spread Collar Casual Shirt",
            price : "₹705",
            description : "Men Regular Fit Solid Spread Collar Casual Shirt,smooth",
            rating : "4*"
        },
        {
            id : 36,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/h/o/e/m-1-no-multicolor-part-3-azmani-original-imaguubfzcf8ne7m.jpeg?q=70&crop=false",
            name : "Men Colorblock Casual Jacket",
            price : "₹799",
            description : "Men Colorblock Casual Jacket,light weight,smooth",
            rating : "3.8*"
        },
        {
            id : 37,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/g/l/-original-imagsfdvebvyzkxa.jpeg?q=70&crop=false",
            name : "Smashic Sneakers For Men  (White)",
            price : "₹1,769",
            description : "PUMA: Smashic Sneakers For Men  (White),regular use",
            rating : "4.1*"
        },
        {
            id : 38,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/a/o/x/30-chino-grey-urbano-fashion-original-imagjzqfqgtbrzta.jpeg?q=70&crop=false",
            name : "Men Slim Fit Grey Cotton Blend Trousers",
            price : "₹799",
            description : "Men Slim Fit Grey Cotton Blend Trousers",
            rating : "3.8*"
        },
        {
            id : 39,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/7/q/9/-original-imagvq9pghu2fze9.jpeg?q=70&crop=false",
            name : "Men Solid Tailored Jacket",
            price : "₹600",
            description : "Mast & Harbour : Men Solid Tailored Jacket",
            rating : "4.2*"
        },
        {
            id : 40,
            category : "fashion",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/e/g/b/s-hd-aw-grey-s-heradawn-original-imagtwrsfrxhhjcy.jpeg?q=70&crop=false",
            name : "Men Full Sleeve Printed Hooded Sweatshirt",
            price : "₹479",
            description : "Men Full Sleeve Printed Hooded Sweatshirt",
            rating : "4.2*"
        },

        // appliance 

        {
            id : 41,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/television/e/i/m/-original-imagtvdyjzxgz3f7.jpeg?q=70&crop=false",
            name : "LG UR7500 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV 2023 Edition with a5 AI Processor 4K Gen6 and 60Hz Refresh Rate, Magic remote capability  (55UR7500PSC)",
            price : "₹40,912",
            description : "The LG UR7500 TV is a masterpiece of visual technology, delivering breathtaking picture quality, immersive sound, and a range of features that enhance your entertainment experience. With its AI-powered capabilities, seamless connectivity, and gaming optimisation, this TV is a true game-changer. Get ready to be mesmerised by the vivid colours, remarkable details, and cinema-like experience right in your own living room. Elevate your home entertainment to new heights with the LG UR7500 TV.",
            rating : "4.4*"
        },
        {
            id : 42,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/k2xmd8w0/television/b/q/g/lg-55sk8500pta-original-imafm642vqebeuhm.jpeg?q=70&crop=false",
            name : "LG 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV  (55SK8500PTA)",
            price : "₹67,990",
            description : "With this LG TV, you can bring the theatre to you as it comes with features that give you a cinematic experience in the comfort of your home. Features such as 4K Cinema HDR with Dolby Vision, Full Array Dimming, and Doly Atmos make up this TV to give you crisp images, rich colours, and deep details.",
            rating : "4.4*"
        },
        {
            id : 43,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/television/x/r/n/-original-imagttjpgtshmnms.jpeg?q=70&crop=false",
            name : "SAMSUNG Crystal 4K iSmart Series 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV 2023 Edition  (UA43CUE60AKLXL)",
            price : "₹30,990",
            description : "With the excellent Samsung TV, which recognises your mood and aims to keep you delighted continually, you can take advantage of rich, clear, and original audiovisual material in its true form. With its real 4K resolution, the Samsung 108 cm (43) Ultra HD LED Smart Tizen TV allows you to see every hue. Thanks to the potent 4K upscaling, you can watch your preferred entertainment in excellent quality and with lifelike visuals. The TV can also express a wide range of colours thanks to PurColor for the best possible image quality and an enjoyable watching experience. Additionally, you can select your preferred genres, TV shows, and much more with the Smart Hub that is integrated into this TV so that you can spend more time enjoying your favourite films and games and less time browsing.",
            rating : "4.3*"
        },
        {
            id : 44,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/washing-machine-new/t/l/t/-original-imagwhdgah4gzxgn.jpeg?q=70&crop=false",
            name : "SAMSUNG 7 kg Fully Automatic Front Load Washing Machine Silver  (WW70R20GLSS/TL)",
            price : "₹29,990",
            description : "Give your clothes a really deep and hygienic clean with steam. A powerful Steam cycle releases steam from the bottom of the drum. So every item in the load is thoroughly saturated. This removes engrained dirt and up to 99.9% of bacteria and inactivates allergens.Digital Inverter technology utilizes strong magnets for a quieter and more powerful performance but consumes less energy than a Universal Motor.",
            rating : "4.4*"
        },
        {
            id : 45,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/washing-machine-new/m/r/e/-original-imagx7qmg7cmycjr.jpeg?q=70&crop=false",
            name : "LG 7 kg 5 Star with Steam, Inverter Direct Drive Technology, 6 Motion DD, Touch Panel and 1200 RPM Fully Automatic Front Load Washing Machine with In-built Heater Black, Grey  (FHM1207SDM)",
            price : "₹28,990",
            description : "Wash your clothes easily with the LG 7 kg Fully Automatic Front-loading Washing Machine. Featuring the Six Motion Direct Drive technology, this washing machine can clean your clothes in a gentle, caring manner. And, sporting a motor connected to its drum, this washing machine generates minimum noise and vibrations while also preventing damage due to wear and tear. Moreover, if you face any issues with its operation, the SmartThinQ app provides rapid resolution for up to 86 errors.Featuring Six Motion Direct Drive technology, the LG 7 kg Fully Automatic Front-loading Washing Machine washes your laundry effectively yet gently by turning its drum in different directions.",
            rating : "4.4*"
        },
        {
            id : 46,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/refrigerator-new/r/e/l/-original-imaggs9nhrntdpex.jpeg?q=70&crop=false",
            name : "realme TechLife 564 L Frost Free Side by Side Refrigerator  (Black, 564ASRM)",
            price : "₹43,990",
            description : "1 Unit Refrigerator, User Manual, Ice Cube Tray, Spanner, 2 Unit Egg Tray Type Side by Side Refrigerator Type Side by Side Defrosting Type Frost Free Compressor Type Advanced Inverter Compressor Capacity 564 L Number of Doors 2 Coolpad No Toughened Glass Yes Built-in Stabilizer Yes",
            rating : "4.4*"
        },
        {
            id : 47,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/air-fryer/o/y/f/-original-imagru7qvfqjjfen.jpeg?q=70&crop=false",
            name : "PHILIPS HD9200/90 Air Fryer  (4.1 L)",
            price : "₹7,499",
            description : "Boasting Rapid Air technology, the Philips HD9200/90 Air Fryer ensures even and quick heating of food, making it crispy from the outside and tender from the inside.Being versatile, this air fryer lets you fry, bake, grill, and roast your favourite food without any hassle. Also, it allows you to reheat your food, so you won’t have to eat cold food.",
            rating : "4.5*"
        },
        {
            id : 48,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/air-fryer/q/r/v/black-2-1200-paf-6-0-prestige-original-imafwarwz4cvpgwr.jpeg?q=70&crop=false",
            name : "Prestige PAF 6.0 with Temperature Control, Smoke Vent Air Fryer  (2.5 L)",
            price : "₹3,990",
            description : "The Prestige PAF 6.0 Air Fryer uses hot air to prepare low fat meals. The air fryer makes use of hot air circulation very vigorously around the food content placed in the basket. The fryer uses a grill and a fan to blast hot air around the food with high speed. This super-heated air is circulated to all sides at once in order to heat and cook the food. The air fryer can be used to get eatables fried, roasted, toasted or even baked within few minutes to get healthy, fast and delicious food",
            rating : "4.1*"
        },
        {
            id : 49,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/xif0q/water-geyser/h/y/a/2023-swcs10vmp8m2-ww-2000-orient-electric-10-original-imagsbrvuhu9xfku.jpeg?q=70&crop=false",
            name : "Orient Electric 10 L Storage Water Geyser (Cronos Pro, White)",
            price : "₹3,999",
            description : "Designed to fulfil all your hot water requirements, Cronos Pro comes in three capacities of 10L, 15L and 25L. Its High-Pressure Epoxy-coated tank is built to last longer, even in hard water conditions. It has a 27% thicker Magnesium anode & Nickel-coated heavy Copper heating element that provide excellent resistance against corrosion. The water heater delivers 20% more hot water output with its advanced Whirlflow technology by minimizing the direct mixing of hot and cold water. Ideal for high-rise buildings that are up to 80m tall, the storage water heater comes with a pressure compatibility up to 8 bar. The high-quality thick PUF insulation prevents heat loss, keeping your water hot for 10% longer, so that you can store and use it whenever required. We prioritize your safety over everything that is why we have added a 5-layer safety shield to this water heater. The geyser has an in-built temperature control mechanism, overheat protection, a rust-proof & water-proof body and fire-retardant features.",
            rating : "4.1*"
        },
        {
            id : 50,
            category : "appliance",
            image : "https://rukminim2.flixcart.com/image/832/832/ksru0sw0/water-geyser/f/z/m/immedio-hindware-original-imag69kgp8yg7jgf.jpeg?q=70&crop=false",
            name : "Hindware 10 L Storage Water Geyser (Immedio Neo, White)",
            price : "₹4,999",
            description : "You can get a plentiful supply of hot water for bathing with the high-performance Hindware Immedio 10 L Water Heater. It sports a compact size and can be installed in any small area. Additionally, its sophisticated design will add to the interior of your home. Also, this water heater boasts a high-quality, 2000 W copper heating element that provides hot water quickly. This not only helps you save valuable time but also adds ease to your daily tasks. Moreover, this water heater is protected from corrosion courtesy of its glass-lined tank construction.",
            rating : "4.1*"
        },
    ]
    )}

module.exports = {data}