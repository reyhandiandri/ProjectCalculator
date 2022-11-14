let namaKaryawan = [
    "Rajif",
    "Bayu",
    "Hadi"
];

function showKaryawan() {
    let listKaryawan = document.getElementById("list-karyawan");
    // console.log(list-karyawan)
    listKaryawan.innerHTML = "";

    for(let i=0; i < namaKaryawan.length; i++){
        var btnEdit = "<a href='#' onclick='editNama("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='hapusNama("+i+")'>Hapus</a>";
        listKaryawan.innerHTML += "<li>" + namaKaryawan[i] + " ["+btnEdit +" | "+ btnHapus +"]" + "</li>";
    }
}

function addKaryawan(){
    let input = document.getElementById("nama");
    // console.log(input)
    namaKaryawan.push(input.value)
    showKaryawan();
}

function editNama(id){
    let newNama = prompt("Inputkan Nama Baru", namaKaryawan[id]);
    namaKaryawan[id] = newNama;
    showKaryawan();
}

function hapusNama(id){
    namaKaryawan.splice(id, 1);
    showKaryawan();
}

showKaryawan();