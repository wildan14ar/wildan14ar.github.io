app.controller('tabs', function ($scope) {
    $scope.tabs = [
        { title: 'Experience', content: '"Saya memiliki pengalaman kerja yang beragam dan berharga dalam beberapa tahun terakhir. Saya telah bekerja di berbagai perusahaan, menghadapi tantangan yang beragam dan memperoleh pengetahuan serta keterampilan yang berharga dalam bidang yang berbeda. Pengalaman kerja saya telah memperkaya pengetahuan dan keterampilan saya, dan saya siap untuk menghadapi tantangan baru dan terus berkembang dalam karier saya."' },
        { title: 'Project', content: '"Saya telah berhasil menyelesaikan sejumlah proyek yang melibatkan berbagai bidang. Proyek-proyek tersebut mencakup pengembangan perangkat lunak, pembuatan website, pengelolaan database, pengembangan aplikasi mobile, dan sejumlah proyek lainnya. Saya telah bekerja keras dan mengaplikasikan pengetahuan dan keterampilan saya dalam menciptakan solusi yang inovatif dan efisien untuk setiap proyek. Saya bangga dengan setiap proyek yang telah saya selesaikan, karena mereka mencerminkan dedikasi, ketekunan, dan kualitas kerja saya. Saya senang dapat menghadirkan solusi yang bernilai bagi klien dan memberikan hasil yang memuaskan dalam setiap proyek yang saya buat."' },
        { title: 'Blogs', content: '"Saya telah menghasilkan sejumlah blog yang beragam, mencakup topik-topik yang menarik dan relevan dalam bidang tertentu. Blog-blog tersebut mencakup topik seperti teknologi, kesehatan, travelling, kuliner, dan banyak lagi. Saya dengan giat meneliti, mengumpulkan informasi, dan menulis konten berkualitas untuk setiap blog yang saya buat. Saya berusaha untuk memberikan nilai tambah bagi pembaca dengan konten yang informatif, menarik, dan terpercaya. Saya bangga dengan setiap blog yang telah saya buat, karena mereka mencerminkan pengetahuan dan minat saya dalam bidang yang spesifik. Saya berharap bahwa blog-blog yang telah saya buat dapat memberikan manfaat bagi pembaca dan menjadi referensi yang berguna dalam topik-topik yang saya tulis."' }
    ];

    $scope.selectedTab = $scope.tabs[0];

    $scope.selectTab = function (tab) {
        $scope.selectedTab = tab;
    };
});

app.controller('youtubeController', function ($scope, $http) {
    var url = 'https://www.googleapis.com/youtube/v3/channels?id=UCWVIDWsXlOw1DQxpH_mlhFw&key=AIzaSyC7ASONDMW4_BuLUoFG0ZH5P3ixSvjiL7o&part=snippet,statistics';

    $http.get(url)
        .then(function (response) {
            var channel = response.data.items[0];

            var channels = `{"title":"${channel.snippet.title}", "url":"${channel.snippet.thumbnails.high.url}", "subscriber":"${channel.statistics.subscriberCount}"}`
            localStorage.setItem("wildan14ar", channels);
        })
        .catch(function (error) {
            console.log('Error:', error);
        });

    Yt = JSON.parse(localStorage.getItem("wildan14ar"));
    $scope.channelName = Yt.title;
    $scope.channelLogo = Yt.url;
    $scope.subscriberCount = Yt.subscriber;
});

app.controller('videoController', function ($scope, $http) {
    var url = 'https://www.googleapis.com/youtube/v3/search?channelId=UCWVIDWsXlOw1DQxpH_mlhFw&key=AIzaSyC7ASONDMW4_BuLUoFG0ZH5P3ixSvjiL7o&part=snippet&maxResults=100&type=video&q=-shorts';

    $http.get(url)
        .then(function (response) {
            var videos = response.data.items[0];
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
});

// Define the list of items
Projects = [
    {
        title: "Scientific Calculator",
        description: "Description for Item 2",
        urlP: "/Scientific-Calculator",
    },{
        title: "Password Patter Validation",
        description: "Description for Item 3",
    },{
        title: "Analog Clock",
        description: "Description for Item 4",
    },{
        title: "Automatic image slider",
        description: "Description for Item 5",
    },{
        title: "Calender",
        description: "Description for Item 6",
    },{
        title: "Copy Script Codingan",
        description: "Description for Item 7",
    },{
        title: "Digital Clock",
        description: "Description for Item 8",
    },{
        title: "ROCK PAPER SCISSOR",
        description: "Description for Item 9",
        urlP: "/Rock-Paper-Scissor",
    },{
        title: "Text Editor in Website",
        description: "Description for Item 10",
    },{
        title: "Typing Speed Test",
        description: "Description for Item 11",
        urlP: "Typing-Speed-Test",
    },{
        title: "Navbar Responsive",
        description: "Description for Item 11",
    },{
        title: "Responsive Card Slider",
        description: "Description for Item 11",
    },{
        title: "Music Player",
        description: "Description for Item 11",
        urlP: "/Music-Player",
    },
];

app.controller('listPB', function($scope) {
    $scope.Projects = Projects.sort(function(){return 0.5 - Math.random()});
    
});


// Quotes = [
//     {
//         quote: "95% of WHAT YOU DO IS THE RESULT OF HABIT",
//         bye: "bye: ARISTOTELE",
//     },{
//         quote: "NEET (Not in Education, Employment or Training)",
//         bye: "",
//     },{
//         quote: "Kelahiran tidak bisa membuatmu jadi orang Hebat, Usahalah yang menentukan Hasilnya",
//         bye: "",
//     },{
//         quote: "Selalu ada lebih dari Satu cara untuk mencapai tujuan",
//         bye: "",
//     },{
//         quote: "Apa yang kamu Ucapkan semua itu adalah DO'A",
//         bye: "",
//     },{
//         quote: "Tidak ada kata Beruntung",
//         bye: "",
//     },{
//         quote: "Kuatkan Akidah agar Pondasinya kuat",
//         bye: "",
//     },{
//         quote: 'Jika kamu mengejar Kesuksesan di "Akhirat". InsyaAllah, Kesuksesan dunia yang akan mengejar kamu',
//         bye: "",
//     },{
//         quote: "Ketika kita beramal sebuah Kebaikan. Maka, Kebaikan itu akan kembali ke kita",
//         bye: "",
//     }
// ];

// app.controller('Quotes', function($scope, $element) {
//     $scope.Quotes = Quotes.sort(function(){return 0.5 - Math.random()});
//     $scope.prev = function() {
//         var widthItem = $element.find('.cards').offsetWidth;
//         $element.find('#quote').scrollLeft -= widthItem;
//     };
//     $scope.next = function() {
//         var widthItem = $element.find('.cards').offsetWidth;
//         $element.find('#quote').scrollLeft += widthItem;
//     };
// });

