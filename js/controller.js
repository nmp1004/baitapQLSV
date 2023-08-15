function layThongTinTuForm() {
    var ma = document.getElementById("txtMaSV").value ;
    var ten = document.getElementById("txtTenSV").value ;
    var email = document.getElementById("txtEmail").value ;
    var pass = document.getElementById("txtPass").value ;
    var ngaysinh = document.getElementById("txtNgaySinh").value ;
    var khoahoc = document.getElementById("khSV");
    var khoahocSV = khoahoc.options[khoahoc.selectedIndex].text;
    var toan = document.getElementById("txtDiemToan").value * 1 ;
    var ly = document.getElementById("txtDiemLy").value * 1 ;
    var hoa = document.getElementById("txtDiemHoa").value * 1 ;
    return  new SinhVien(ma, ten, email, pass, ngaysinh, khoahocSV, toan, ly, hoa)
}

function renderSV(dsSV) {
    var contentHTML = "";
    for (var item of dsSV) {
        var contentTr = `
                    <tr>
                        <td>${item.ma}</td>
                        <td>${item.ten}</td>
                        <td>${item.email}</td>
                        <td>${item.ngaysinh}</td>
                        <td>${item.khoahocSV}</td>
                        <td>${item.tinhDTB()}</td>
                        <td>
                            <button class="btn btn-warning" onclick="suaSV('${item.ma}')">Sửa</button>
                            <button class="btn btn-danger" onclick="xoaSV('${item.ma}')">Xóa</button>
                        </td>
                    </tr>
        `
        contentHTML = contentHTML + contentTr;
    }
    return document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function timViTri(ma,dsSV) {
    return dsSV.findIndex(function(sv) {
        return sv.ma == ma ;
    })
}

function showThongTinLenForm(sv) {
    document.getElementById("txtMaSV").value = sv.ma
    document.getElementById("txtTenSV").value = sv.ten
    document.getElementById("txtEmail").value = sv.email
    document.getElementById("txtPass").value = sv.pass
    document.getElementById("txtNgaySinh").value = sv.ngaysinh
    document.getElementById("khSV").value = sv.khoahocSV
    document.getElementById("txtDiemToan").value = sv.toan
    document.getElementById("txtDiemLy").value = sv.ly
    document.getElementById("txtDiemHoa").value = sv.hoa
}