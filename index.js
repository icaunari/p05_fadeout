$(document).ready(function(){
    $('.ica_cell').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_baris = rid[1];
        let nama_mhs = $('#nama_mhs_'+id_baris).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Anda yakin ingin menghapus data atas nama ${nama_mhs} ??`);
            if(!konfirmasi) return;

            $('#baris_'+id_baris).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})