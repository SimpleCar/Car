package cn.kgc.entity;

import java.io.Serializable;

public class User implements Serializable {
    private int uid;
    private String uname;//昵称
    private String upwd;
    private String uphone;//手机
    private int gender;//性别:1,0:男，女
    private String city;//所在城市
    private String address;//详细地址
    private int creditId;//信用信息id
    private int orderId;//订单id
    private String IdNum;//身份证号码


    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getUpwd() {
        return upwd;
    }

    public void setUpwd(String upwd) {
        this.upwd = upwd;
    }

    public String getUphone() {
        return uphone;
    }

    public void setUphone(String uphone) {
        this.uphone = uphone;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getCreditId() {
        return creditId;
    }

    public void setCreditId(int creditId) {
        this.creditId = creditId;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getIdNum() {
        return IdNum;
    }

    public void setIdNum(String idNum) {
        IdNum = idNum;
    }

    @Override
    public String toString() {
        return "User{" +
                "uid=" + uid +
                ", uname='" + uname + '\'' +
                ", upwd='" + upwd + '\'' +
                ", uphone='" + uphone + '\'' +
                ", gender='" + gender + '\'' +
                ", city='" + city + '\'' +
                ", address='" + address + '\'' +
                ", creditId=" + creditId +
                ", orderId=" + orderId +
                ", IdNum='" + IdNum + '\'' +
                '}';
    }
}
