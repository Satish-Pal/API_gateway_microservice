# Vehicle Reservation Application - Web-based Platform

This project successfully implements a vehicle reservation system with a robust backend architecture. To reserve a vehicle, users can input their first name and last name. After entering the information and clicking the "Next" button, the application will display a selection of vehicles with options for 2-wheelers and 4-wheelers retrieved from the backend. Upon choosing a vehicle type and clicking "Next," users will be presented with bike types, such as cruiser and sports, sourced from the backend. Subsequently, selecting a specific bike type and clicking "Next" will lead to a date selection interface offering options for start and end dates. After choosing the dates and clicking the "Submit" button, all the selected data will be inserted into the database.

The technology stacks employed in this project are:

- Node.JS with Nest.JS
- TypeORM for MySQL

## Running the Application

- Clone this repository.
- Run npm install.
- Open XAMPP, and start both the Apache and MySQL servers to access the database.
- Once the server is running, go to the browser and enter the URL "localhost/phpmyadmin."
- In the MySQL dashboard of phpMyAdmin, create a database named "get_a_vehicle."
- Finally, navigate to the root directory of the project and type the following command in the terminal: npm run start:dev.
- The server will be accessible at http://localhost:3000.






Stacks used in this project is :
- Node.JS with Nest.JS
- TypeORM mysql 

## How to Run this application

- clone this repository.
- Run npm install.
- open xampp and run apache as well as mysql server to view the data from database.
- when server starts go to : browser and enter url "localhost/phpmyadmin".
- at phpmyadmin you will get mysql dashboard. create a database name get_a_vehicle.
- finally go to root directory of the project and type in the terminal : Run npm run start:dev
- server will runn on http://localhost:3000.




```
book_a_vehicle
├─ .eslintrc.js
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 08
│  │  │  ├─ 1fb005f6ac4524ba9067e0585662d9429bd5e1
│  │  │  └─ 41f8cce0e0ed37da55fa4031645f63253ea2e0
│  │  ├─ 0a
│  │  │  └─ 5a6b7daabb4c55d51c7564676ce6fd8ac8e2d9
│  │  ├─ 0b
│  │  │  └─ a671d3000cb955f14e73135cb7e332ee0fd805
│  │  ├─ 0f
│  │  │  └─ 9a3f90f1f557c6eb7abeaae52bb0c53c8a7405
│  │  ├─ 10
│  │  │  └─ 9327c16989397ecf409a0cd679be344c06e476
│  │  ├─ 13
│  │  │  ├─ cad38cff92aa3b3d3ef6232306e450cadf5713
│  │  │  └─ e9978a17d10219fefd1a496abcca1330e8ec91
│  │  ├─ 14
│  │  │  └─ a7ead0423c367cb06b619f006e33a60eb2ebcf
│  │  ├─ 15
│  │  │  └─ 1d2fd011d6cb3212c2ed4e1d932ea7d389e584
│  │  ├─ 16
│  │  │  └─ 20c91f42bc2a9c3205e589e8ff9277524bfb49
│  │  ├─ 18
│  │  │  ├─ 6453b3e0c04eec97b6962ad31958380590900b
│  │  │  ├─ 8164ede73bfe205f5d54d2177dad58e8678393
│  │  │  ├─ 8c1d576b27b2c57f439fec47268e34c6be2613
│  │  │  └─ a10c99427f642781949ef694966253d38662b1
│  │  ├─ 19
│  │  │  └─ 49d9626fad1c941b7c0356c568e55813a8254f
│  │  ├─ 1a
│  │  │  └─ d1e59880ba96e480790b0bbc414da8a0690dca
│  │  ├─ 1b
│  │  │  └─ 559b190f06d301b28800fe8b8e1b1d47c4a6d0
│  │  ├─ 22
│  │  │  ├─ ac25ff6a557b027ee05a1f185cf1d2d96b58e4
│  │  │  ├─ f55adc5647206db11558139164c3deb77f5c01
│  │  │  └─ f621244d923e6a5f22a663e643da0e87f3f0c6
│  │  ├─ 24
│  │  │  ├─ 32fbe47ed8d7d685fb08e72770435d7799e20a
│  │  │  ├─ 64fdf925d7d1986e35a34cc4679d8c465c22ea
│  │  │  └─ 8b9fcdb76e20b51a1f1fab29ad87342df7a90c
│  │  ├─ 25
│  │  │  └─ 9de13c733a7284a352a5cba1e9fd57e97e431d
│  │  ├─ 26
│  │  │  └─ 3cc6336d28229c828ca6b16f493c6a9867dba4
│  │  ├─ 2a
│  │  │  └─ a508c5a4630088327ec93f1afa8f567cfa0cfa
│  │  ├─ 2d
│  │  │  └─ edfda2d15e1f52381e89f68553c58376276ba3
│  │  ├─ 2e
│  │  │  └─ 1eb33c4c4e40850ca5c89d175aadee99bcfe4e
│  │  ├─ 31
│  │  │  ├─ dc8a2ff1e47033886135710684a997d86b69fa
│  │  │  └─ dd765e3854861d45c78bbcdb561234b387c538
│  │  ├─ 32
│  │  │  └─ 9139d748b2352c45894fb047b37f2098a444de
│  │  ├─ 38
│  │  │  └─ 603d58f37b0abc8136823de9938442e8fb99c9
│  │  ├─ 3a
│  │  │  └─ a94e956e7d4d907390fb09d2564c2d14b2cc7c
│  │  ├─ 3b
│  │  │  └─ da6afbef4bb32fc7b7c06980e937b790757a29
│  │  ├─ 3d
│  │  │  └─ 6bad0e3799215bb766527cb5fc2ba72f7c90b7
│  │  ├─ 40
│  │  │  ├─ 1dad3d2c0f7426f1639b7e0032bb2b2d60890f
│  │  │  └─ 8464fd8044e6b6397602c974f898f33dc3ed78
│  │  ├─ 41
│  │  │  └─ fbcc96a64aa9e7972711d24d3ac826dba8dfb5
│  │  ├─ 42
│  │  │  └─ fb8840ff99ee8bd77612ac9f02e3dbd7aa8397
│  │  ├─ 46
│  │  │  ├─ 180de0de53a63b06ee0420068f335f28421754
│  │  │  ├─ 998e81ce8ff174fe19a63da2be888d8e8286bc
│  │  │  └─ ef5340d20db7273c0bdc0bcd1d66aebc3bbc38
│  │  ├─ 47
│  │  │  └─ d4fc49b269852159bb7aac3791318634168696
│  │  ├─ 48
│  │  │  └─ bf06a9582cd5709e7d115e4223f7e15042532c
│  │  ├─ 4a
│  │  │  └─ 254f4918e2f6cd3e63ebe6dad025b27f66de67
│  │  ├─ 4c
│  │  │  └─ f465bc3eee191fe23c2312629ff6d6bf2d20f6
│  │  ├─ 4e
│  │  │  └─ 0dfbb0253c6c652f9083e1f419ea914ff67396
│  │  ├─ 50
│  │  │  └─ cda62332e9474925e819ff946358a9c40d1bf2
│  │  ├─ 51
│  │  │  ├─ f744b93e90fa858d140e1ff657151fbeea8454
│  │  │  └─ f756eb0cf7ceaf8b966b13ab31127a5e6767eb
│  │  ├─ 52
│  │  │  ├─ 4dc4abb1ee76ebea8ea763c51e6d73809203ce
│  │  │  └─ 694d70d9f045b346a8756ab2a504f7b8547e5e
│  │  ├─ 58
│  │  │  └─ 62fc0e409782a7a4708d8d3b05a5676e725672
│  │  ├─ 59
│  │  │  └─ 75c708f84d289a7d18432c7c90f949bb3af4ed
│  │  ├─ 5c
│  │  │  └─ 78cdd83104efb3caddb1f3e7c62c76c586b4cf
│  │  ├─ 5d
│  │  │  └─ 84d521b31a4ae95419a9070f1b1570d904a9f4
│  │  ├─ 5e
│  │  │  ├─ df5045940de8a90c15d4a1c81581c4dd7bbd6b
│  │  │  └─ fe8aaab3ed91e78e4b611f4ba2297b8b368893
│  │  ├─ 60
│  │  │  └─ 1552cf01e8e6aace29874256c4345bc415f76d
│  │  ├─ 63
│  │  │  └─ f6f0496788d2eb2fbe5f6796e773610dbd5cef
│  │  ├─ 64
│  │  │  ├─ 9cb9320ca9d4ad2fa5374cbc1e8325c0149852
│  │  │  └─ f86c6bd2bb30e3d22e752295eb7c7923fc191e
│  │  ├─ 69
│  │  │  └─ b365ea6925b4369db2633ce3e30184e75e4f0d
│  │  ├─ 6e
│  │  │  ├─ 59d7d735045e3aacbf7f9367accc7b4ed13998
│  │  │  └─ 97f1f4155b6bc92d4143cc21c0782be1c260e9
│  │  ├─ 70
│  │  │  ├─ 2d9268094c3da79f14382ad0211921f0044c13
│  │  │  └─ e3a12ea2d0f6f4a473a6ebe6f126122ef1dde3
│  │  ├─ 73
│  │  │  └─ b78d6e91da0a72841aa49f364a3ac1c3951b7a
│  │  ├─ 74
│  │  │  └─ 21d8bbe3b6b21982053a75af9ad2341f5c214a
│  │  ├─ 75
│  │  │  └─ 889b7941139e8b2f54df843d29cc36b9f15079
│  │  ├─ 7e
│  │  │  └─ 90fd6352ad56094f9b140d7b9d0252621a6f45
│  │  ├─ 80
│  │  │  └─ fa61f96f5bd700f680bf8baf6f430dac0b4b88
│  │  ├─ 81
│  │  │  ├─ 4ae20dc066df3b86849e8e95d692a4162a22b1
│  │  │  └─ 7802f0a7e3719483fdcf0dba2e52a62525e2cf
│  │  ├─ 83
│  │  │  ├─ 30ff5ec3c23e4901e1120d034d8dcd0db886a6
│  │  │  └─ 93786e138ba0f5279c6e6e3556f1197601b76a
│  │  ├─ 84
│  │  │  ├─ 2b565bf1ce5d615dd72df6d3468e1a4b9c3b94
│  │  │  └─ 78f566c9b846ac4608430b174947bdc1cf6b17
│  │  ├─ 85
│  │  │  └─ 2bbb6d30f263ac1ad0b3a8c322930af7f105ae
│  │  ├─ 86
│  │  │  └─ 628031ca2a10fe172fe824f69d1720c44b43ce
│  │  ├─ 87
│  │  │  ├─ 491f83827645f5810a05b5e3afcf4a7e146e78
│  │  │  └─ e9d04a6343ab7b8b7583f55efd678be4a2edec
│  │  ├─ 88
│  │  │  └─ 2d097035ba61190340844c521e5ea020e0ebba
│  │  ├─ 89
│  │  │  └─ 09140d2d742bb74e64de12a5f3a4cfec6dd91f
│  │  ├─ 8a
│  │  │  └─ 8a9a14bc8616fe3396822ed578d1cfef32c7a6
│  │  ├─ 8f
│  │  │  ├─ b2a31261aa929de57247a8c6dac6508c4ca23c
│  │  │  └─ cd93906db5ed8ce198d428a689419c55e13ce0
│  │  ├─ 90
│  │  │  ├─ 01c5fb2be3fab1c6dc3625f6b609ed3814ff7c
│  │  │  ├─ 2a3168045b13782882a7c9a4851f69dd0752e3
│  │  │  └─ 86d9fbfcd28e5ac1ace1560431ff40efa3379b
│  │  ├─ 92
│  │  │  └─ 7d7cca0badb13577152bf8753ce3552358f53b
│  │  ├─ 93
│  │  │  ├─ 45467a803e30f02ee943e1f3932dff67df087e
│  │  │  └─ 4a3ac51f0a263cc515d6261fcddeb49f2807f5
│  │  ├─ 95
│  │  │  └─ f5641cf7f33d3e9022c4a60c5f0ff0958d2a4e
│  │  ├─ 9b
│  │  │  ├─ 2e2bde664cde3777edd3f49f307e8e38d5a9d7
│  │  │  └─ 5a725a4a2637888adc7c985d5fc17f1e8f3eee
│  │  ├─ 9c
│  │  │  ├─ 2d5edd055ce3f7911b0b24eedbe172879c0b4b
│  │  │  └─ fbe0cd4d828e0b77befc379cc91a682e5d5b46
│  │  ├─ 9f
│  │  │  └─ 83f03216c842fe91c3df3775664a3f2cffdbc0
│  │  ├─ a2
│  │  │  └─ 85360fdcc93a1c2f244af81600279ceea81978
│  │  ├─ a3
│  │  │  └─ c34aba3e5f2cd7c43c96696f2518621738be01
│  │  ├─ a4
│  │  │  ├─ 128fbade86511d21bc51a3cbb7937defa44959
│  │  │  └─ 3532009731a6c59e96dbbd4a212c6f6f6fe4d2
│  │  ├─ aa
│  │  │  └─ c034bbd65dee2a0b793f5e755577957996b461
│  │  ├─ ac
│  │  │  └─ 86f80741c00e2701eaf13712a3006c9496f89a
│  │  ├─ ad
│  │  │  └─ a6dca29bcc058f118c8b73e9a83bbb8c5b3124
│  │  ├─ af
│  │  │  └─ b841bc340108625cd47e4ed39b525060c8e797
│  │  ├─ b0
│  │  │  └─ 79a5744adea7cbf04d581dea2a585c0bd95b10
│  │  ├─ b2
│  │  │  └─ 73f28a3570e32ee9c5079cd1d08192996c03d3
│  │  ├─ b3
│  │  │  └─ 9048541efc13d3f74c6745cac5c23b29185de2
│  │  ├─ b4
│  │  │  ├─ 14a5c1ea81f909d20b3d5c96c66eb918ba2489
│  │  │  └─ bce5d2042f2de4897aa72fc2454108cc7b6f58
│  │  ├─ b6
│  │  │  ├─ a568a50639f7bcf9f2f18cc080e64e6240ca08
│  │  │  └─ c968bfe40b867e7d496ee31362e799ee722b8d
│  │  ├─ b8
│  │  │  ├─ ba51a4edcfee6f81d5b052b167dd061eba009c
│  │  │  └─ e7f36d0b4b387c15a7f63926cd9068668a6da2
│  │  ├─ b9
│  │  │  └─ 4acff7d73b3332b96e64a6f667ca86c35f5af7
│  │  ├─ ba
│  │  │  └─ 96708fec83d4c49b5dccbded8279ddd879a4ec
│  │  ├─ bc
│  │  │  └─ ff81a7646397d005c2a5e53f7ec8fc832cfb25
│  │  ├─ be
│  │  │  ├─ 7352a01be6d66a00a59d121c632bf44c014f06
│  │  │  ├─ acc2e8b6fe3bc4727a7fa66bda0790ece12f5d
│  │  │  └─ e3b7fafa120a07bbbfd1f42239c8fb76cf33f4
│  │  ├─ c5
│  │  │  └─ 650732b8f8a1984bfd5c3159ecee8990cd28bf
│  │  ├─ c7
│  │  │  ├─ 107dedd726d27ee05cbed95e643dfd9bd8f787
│  │  │  ├─ 3b04772993ccbab6917c0f32b7e35569c5b25c
│  │  │  └─ 9191ddc61e1529ea3f92c60781fbdd61067ed9
│  │  ├─ c8
│  │  │  └─ 6f1628f7935d2522cce4a2531c869be5b076a2
│  │  ├─ cb
│  │  │  └─ 499144a092a72634589cd40ed438851a0150d7
│  │  ├─ cc
│  │  │  └─ e879ee622146012901c9adb47ef40c0fd3a555
│  │  ├─ cd
│  │  │  └─ 3440e5a80cc8a9fbc97c9bf94de92a0293bba3
│  │  ├─ ce
│  │  │  ├─ 6ce916c47096cf825a5d5c708c8744d20f9d1b
│  │  │  └─ d8250df9e3262fa1355fcf20293d021d8c755c
│  │  ├─ d1
│  │  │  ├─ 41c9b0c6aed1ed2cb1771f794b78684825cba4
│  │  │  └─ fdb84a982a0a17bad49b7e30f2dbad68fae36d
│  │  ├─ d2
│  │  │  └─ 2f3890a380cea30641cfecc329b5c794ef5fb2
│  │  ├─ da
│  │  │  ├─ 044ab7e35a6aee4ba36f05d393d3c031ceaeeb
│  │  │  └─ ae7ff05a5ea21f01a13bfb583f90fbe74fdd97
│  │  ├─ dc
│  │  │  └─ b72794f5300a3e0ccd2ad0669d802b62f3d370
│  │  ├─ dd
│  │  │  └─ 2c10ceaaa901fb705b9c1ba07f3cbb9cf49dba
│  │  ├─ de
│  │  │  └─ 702a8c7baed5e47b0da03220c63ea302c3d70c
│  │  ├─ df
│  │  │  └─ f609b67fa0fda35d2ae0ad99746453ec7b5ae5
│  │  ├─ e0
│  │  │  └─ 8d7003ed57387e7e70957aafc04206a66ce247
│  │  ├─ e1
│  │  │  └─ e6645b8e337a52e90ad97973a2562a1f1f0df6
│  │  ├─ e4
│  │  │  └─ 172bb412f933fe0d51170ea7f71c47ab49d9e5
│  │  ├─ e6
│  │  │  └─ 339d7c10b13fc7044bf2e93d92bf417fcdbf4c
│  │  ├─ e9
│  │  │  ├─ 063336ff9977edb804fab7cdfdd9d1110da4c9
│  │  │  └─ d912f3e3cefc18505d3cd19b3a5a9f567f5de0
│  │  ├─ eb
│  │  │  └─ 19364f1d018f59153b2cc778a8d29f82c0bade
│  │  ├─ ec
│  │  │  └─ e75f9c9465a4406b6ccec0c6ce73791ed6db55
│  │  ├─ f1
│  │  │  └─ 85ef0573ad77f31210c45afd754d2faef1531a
│  │  ├─ f2
│  │  │  ├─ 1c448bed6b854d1d022b7d47364ae9b86b3aa9
│  │  │  └─ 5e89642a480288e348eece7d2111bb6a39a625
│  │  ├─ f7
│  │  │  └─ afd30a168d80242f98bcd4ac27f936e01d74c0
│  │  ├─ f9
│  │  │  ├─ 2c11633ea8802b73c33001595c919b9a37df68
│  │  │  └─ aa683b1ad5cffc76da9ad4b77c562ac4c2b399
│  │  ├─ fa
│  │  │  ├─ 83a1efe4ffc599d94177753b5681ac720a35e0
│  │  │  └─ b7359e32b95c04f2df2818f3b3bc62c7647bb6
│  │  ├─ fb
│  │  │  └─ 23b402d64c5a205f97e4929600ce220e933602
│  │  ├─ fc
│  │  │  └─ de3c5e1dc81534714c975d236bdf6eb93a5886
│  │  ├─ fd
│  │  │  └─ 893c72718bd9bcefc2d01c6d317b0f81392fdf
│  │  ├─ fe
│  │  │  └─ c7205f1e9d5f19c9dbc453852f201492eef94f
│  │  ├─ ff
│  │  │  └─ b52c0769d9b5baf07516034fdc97a4193bfa43
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ Resume_Satish_Pal_WebDev.pdf
├─ src
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ bookings
│  │  ├─ bookings.controller.ts
│  │  ├─ bookings.module.ts
│  │  ├─ bookings.service.ts
│  │  ├─ dto
│  │  │  ├─ create-booking.dto.ts
│  │  │  └─ update-booking.dto.ts
│  │  └─ entities
│  │     └─ booking.entity.ts
│  ├─ main.ts
│  ├─ numberOfWheels
│  │  ├─ numberOfWheels.controller.ts
│  │  ├─ numberOfWheels.module.ts
│  │  └─ numberOfWheels.repository.ts
│  ├─ seeding
│  │  ├─ numberOfWheels.entity.ts
│  │  ├─ seeding.module.ts
│  │  ├─ seeding.service.ts
│  │  ├─ vehicleModel.entity.ts
│  │  └─ vehicleTypes.entity.ts
│  ├─ vehicleModels
│  │  ├─ vehicleModels.controller.ts
│  │  └─ vehicleModels.module.ts
│  └─ vehicleTypes
│     ├─ vehicleTypes.controller.ts
│     └─ vehicleTypes.module.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

```