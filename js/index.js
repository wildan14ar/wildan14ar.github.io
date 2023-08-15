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
    var url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCWVIDWsXlOw1DQxpH_mlhFw&key=AIzaSyC7ASONDMW4_BuLUoFG0ZH5P3ixSvjiL7o';

    $http.get(url)
        .then(function (response) {
            var channel = response.data.items[0];

            $scope.channelName = channel.snippet.title;
            $scope.channelLogo = channel.snippet.thumbnails.default.url;
            $scope.subscriberCount = channel.statistics.subscriberCount;
        })
        .catch(function (error) {
            console.log('Error:', error);
        });
});