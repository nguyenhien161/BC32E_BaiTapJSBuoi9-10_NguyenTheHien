function NhanVien() {
    this.taiKhoan = '';
    this.hoTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngayLam = '';
    this.luongCoBan = 0;
    this.chucVu = '';
    this.gioLam = 0;
    this.tinhTongLuong = function () {
        var tongLuong = 0;
        if (sep) {
            tongLuong = Number(this.luongCoBan) * 3;
        } else if (truongPhong) {
            tongLuong = Number(this.luongCoBan) * 2;
        } else {
            tongLuong = Number(this.luongCoBan)
        }
        return tongLuong = 'xem lại chức vụ';
    }
    this.xepLoai = function () {
        //input: điểm trung bình
        var gioLam = this.gioLam;
        //output: string
        var xepLoai = '';
        if (gioLam >= 192) {
            xepLoai = 'Xuất sắc';
        } else if (gioLam >= 176) {
            xepLoai = 'Giỏi';
        } else if (gioLam >= 160) {
            xepLoai = 'Khá';
        } else {
            xepLoai = 'Trung Bình';
        }
        return xepLoai;
    }
}