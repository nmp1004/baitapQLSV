function SinhVien(ma, ten, email, pass, ngaysinh, khoahocSV, toan, ly, hoa) {
    this.ma = ma;
    this.ten = ten;
    this.email = email;
    this.pass = pass;
    this.ngaysinh = ngaysinh;
    this.khoahocSV = khoahocSV;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.tinhDTB = function () {
        return ((this.toan+this.ly+this.hoa)/3).toFixed(1)
    }
}