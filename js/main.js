var mangNhanVien = [];
document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien();

    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    var ngayLam = document.querySelector('#datepicker').value;
    nv.ngayLam = moment(ngayLam).format('DD-MM-YYYY')
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    nv.luongCoBan = document.querySelector('#luongCB').value;
    console.log(nv);
    mangNhanVien.push(nv);
    console.log('mangNhanVien', mangNhanVien);
    renderTableNhanVien(mangNhanVien);
    luulocalStorage();


}

function renderTableNhanVien(arrNhanVien) {
    var html = '';
    for (var index = 0; index < arrNhanVien.length; index++) {
        var nv = arrNhanVien[index];
        nv.tinhTongLuong = function () {
            var tongLuong = 0;
            if (this.chucVu == 'Sếp') {
                tongLuong = Number(this.luongCoBan) * 3;
            } else if (this.chucVu == 'Trưởng phòng') {
                tongLuong = Number(this.luongCoBan) * 2;
            } else if (this.chucVu == 'Nhân viên') {
                tongLuong = Number(this.luongCoBan)
            } else {
                tongLuong = 'Mời chọn chức vụ'
            }
            return tongLuong;
        }

        nv.xepLoai = function () {
            var loai = '';
            if (this.gioLam >= 192) {
                loai = 'xuất sắc !'
            } else if (this.gioLam >= 176) {
                loai = 'giỏi !'
            } else if (this.gioLam >= 160) {
                loai = 'khá !'
            } else {
                loai = ' trung bình !'
            }
            return loai;
        }
        html += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tinhTongLuong()}</td>
            <td>${nv.xepLoai()}</td>
            <td><button class="btn btn-danger" onclick="xoaSinhVien('${nv.taiKhoan}')">Xóa</button></td>
            <td><button class="btn btn-danger" onclick="chinhSua('${nv.taiKhoan}')">Chỉnh sửa</button></td>
        </tr>`
    }

    document.querySelector('#tableDanhSach').innerHTML = html;

    return html;
}

function chinhSua(maNhanVienClick) {
    var indexEdit = mangNhanVien.findIndex(nv => nv.taiKhoan === maNhanVienClick);
    var nvEdit = mangNhanVien[indexEdit];
    console.log('nvEdit', nvEdit);

    document.querySelector('#tknv').disabled = true;
    document.querySelector('#tknv').value = nvEdit.taiKhoan;
    document.querySelector('#name').value = nvEdit.hoTen;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.matKhau;
    document.querySelector('#datepicker').value = nv.ngayLam;
    document.querySelector('#chucvu').value = nvEdit.chucVu;
    document.querySelector('#gioLam').value = nvEdit.gioLam;
    document.querySelector('#luongCB').value = nvEdit.luongCoBan;
}


document.querySelector('#btnCapNhat').onclick = function () {

    var nv = new NhanVien();
    console.log(nv)
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    var ngayLam = document.querySelector('#datepicker').value;
    nv.ngayLam = moment(ngayLam).format('DD-MM-YYYY')
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    nv.luongCoBan = document.querySelector('#luongCB').value;

    var indexEdit = mangNhanVien.findIndex(nhanVien => nhanVien.taiKhoan === nv.taiKhoan);

    mangNhanVien[indexEdit].hoTen = nv.hoTen;
    mangNhanVien[indexEdit].email = nv.email;
    mangNhanVien[indexEdit].matKhau = nv.matKhau;
    mangNhanVien[indexEdit].ngayLam = nv.ngayLam;
    mangNhanVien[indexEdit].chucVu = nv.chucVu;
    mangNhanVien[indexEdit].gioLam = nv.gioLam;
    mangNhanVien[indexEdit].luongCoBan = nv.luongCoBan;
    renderTableNhanVien(mangNhanVien);

    document.querySelector('#maSinhVien').disabled = false;

    luuLocalStorage();
}