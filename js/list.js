// Define the list of items
Projects = [
    {
        title: "Game Finger",
        description: "Description for Item 1",
    },{
        title: "Calculator",
        description: "Description for Item 2",
    },{
        title: "Password Patter Validation",
        description: "Description for Item 3",
    },{
        title: "Form",
        description: "Description for Item 4",
    },{
        title: "Item 5",
        description: "Description for Item 5",
    },{
        title: "Item 6",
        description: "Description for Item 6",
    },{
        title: "Item 7",
        description: "Description for Item 7",
    },{
        title: "Item 8",
        description: "Description for Item 8",
    },{
        title: "Item 9",
        description: "Description for Item 9",
    },{
        title: "Item 10",
        description: "Description for Item 10",
    },{
        title: "Item 11",
        description: "Description for Item 11",
    },
];

app.controller('listPB', function($scope) {
    $scope.Projects = Projects.sort(function(){return 0.5 - Math.random()});
});


Quotes = [
    {
        quote: "95% of WHAT YOU DO IS THE RESULT OF HABIT",
        bye: "bye: ARISTOTELE",
    },{
        quote: "NEET (Not in Education, Employment or Training)",
        bye: "",
    },{
        quote: "Kelahiran tidak bisa membuatmu jadi orang Hebat, Usahalah yang menentukan Hasilnya",
        bye: "",
    },{
        quote: "Selalu ada lebih dari Satu cara untuk mencapai tujuan",
        bye: "",
    },{
        quote: "Apa yang kamu Ucapkan semua itu adalah DO'A",
        bye: "",
    },{
        quote: "Tidak ada kata Beruntung",
        bye: "",
    },{
        quote: "Kuatkan Akidah agar Pondasinya kuat",
        bye: "",
    },{
        quote: 'Jika kamu mengejar Kesuksesan di "Akhirat". InsyaAllah, Kesuksesan dunia yang akan mengejar kamu',
        bye: "",
    },{
        quote: "Ketika kita beramal sebuah Kebaikan. Maka, Kebaikan itu akan kembali ke kita",
        bye: "",
    }
];

app.controller('Quotes', function($scope, $element) {
    $scope.Quotes = Quotes.sort(function(){return 0.5 - Math.random()});
    $scope.prev = function() {
        var widthItem = $element.find('.cards').offsetWidth;
        $element.find('#quote').scrollLeft -= widthItem;
    };
    $scope.next = function() {
        var widthItem = $element.find('.cards').offsetWidth;
        $element.find('#quote').scrollLeft += widthItem;
    };
});
