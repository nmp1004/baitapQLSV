var dsSV = [];
var checkFix = true;
var jsondata = localStorage.getItem("DSSV");
if (jsondata != null) {
    var list = JSON.parse(jsondata)
    dsSV = list.map(function(item) {
        return new SinhVien(item.ma, item.ten, item.email, item.pass, item.ngaysinh, item.khoahocSV, item.toan, item.ly, item.hoa)
    })
}
renderSV(dsSV)

function themSV() {
    if (checkFix) {
        var sv = layThongTinTuForm()
        dsSV.push(sv);
        console.log(dsSV);
        renderSV(dsSV);
        var jsondata = JSON.stringify(dsSV);
        localStorage.setItem("DSSV",jsondata)
    }
}

function xoaSV(ma) {
    var index = timViTri(ma,dsSV)
    dsSV.splice(index,1)
    renderSV(dsSV)
    var jsondata = JSON.stringify(dsSV);
    localStorage.setItem("DSSV",jsondata)
}

function suaSV(ma) {
    checkFix=false
    document.getElementById("txtMaSV").disabled = true
    var index = timViTri(ma,dsSV);
    showThongTinLenForm(dsSV[index])
}

function resetSV() {
    checkFix=true
    document.getElementById("txtMaSV").disabled = false
    document.getElementById("formQLSV").reset()
}

function capnhatSV() {
    var sv = layThongTinTuForm()
    var index= timViTri(sv.ma,dsSV)
    dsSV[index] = sv
    renderSV(dsSV)
    var jsondata = JSON.stringify(dsSV);
    localStorage.setItem("DSSV",jsondata)
}