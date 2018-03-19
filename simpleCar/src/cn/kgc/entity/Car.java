package cn.kgc.entity;

import java.io.Serializable;

public class Car implements Serializable {
    //车的ID
    private int cid;
    //车的名字
    private String cname;
    //车的价格
    private float cprice;
    //车的级别
    private int cleavel;
    //车的牌子
    private String cvariety;
    //车的库存
    private int cstock;
    //车的最小值
    private float cmin;
    //车的最大值
    private float cmax;
    //车的图片存放路径
    private String cimage;
    //车的买家
    private int cUser;
    //车的卖家
    private int cBusiness;
    //车的买卖状态
    private String cState;
    //商家ID
    private int bid;

    public Car() {
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public float getCprice() {
        return cprice;
    }

    public void setCprice(float cprice) {
        this.cprice = cprice;
    }

    public int getCleavel() {
        return cleavel;
    }

    public void setCleavel(int cleavel) {
        this.cleavel = cleavel;
    }

    public String getCvariety() {
        return cvariety;
    }

    public void setCvariety(String cvariety) {
        this.cvariety = cvariety;
    }

    public int getCstock() {
        return cstock;
    }

    public void setCstock(int cstock) {
        this.cstock = cstock;
    }

    public float getCmin() {
        return cmin;
    }

    public void setCmin(float cmin) {
        this.cmin = cmin;
    }

    public float getCmax() {
        return cmax;
    }

    public void setCmax(float cmax) {
        this.cmax = cmax;
    }

    public String getCimage() {
        return cimage;
    }

    public void setCimage(String cimage) {
        this.cimage = cimage;
    }

    public int getcUser() {
        return cUser;
    }

    public void setcUser(int cUser) {
        this.cUser = cUser;
    }

    public int getcBusiness() {
        return cBusiness;
    }

    public void setcBusiness(int cBusiness) {
        this.cBusiness = cBusiness;
    }

    public String getcState() {
        return cState;
    }

    public void setcState(String cState) {
        this.cState = cState;
    }

    public int getBid() {
        return bid;
    }

    public void setBid(int bid) {
        this.bid = bid;
    }

    @Override
    public String toString() {
        return "Car{" +
                "cid=" + cid +
                ", cname='" + cname + '\'' +
                ", cprice=" + cprice +
                ", cleavel=" + cleavel +
                ", cvariety='" + cvariety + '\'' +
                ", cstock=" + cstock +
                ", cmin=" + cmin +
                ", cmax=" + cmax +
                ", cimage='" + cimage + '\'' +
                ", cUser=" + cUser +
                ", cBusiness=" + cBusiness +
                ", cState='" + cState + '\'' +
                ", bid=" + bid +
                '}';
    }

    public Car(int cid, String cname, float cprice, int cleavel, String cvariety, int cstock, float cmin, float cmax, String cimage, int cUser, int cBusiness, String cState, int bid) {
        this.cid = cid;
        this.cname = cname;
        this.cprice = cprice;
        this.cleavel = cleavel;
        this.cvariety = cvariety;
        this.cstock = cstock;
        this.cmin = cmin;
        this.cmax = cmax;
        this.cimage = cimage;
        this.cUser = cUser;
        this.cBusiness = cBusiness;
        this.cState = cState;
        this.bid = bid;
    }
    //    ALTER TABLE car ADD cUser INT(4) COMMENT "车的买家"
//    ALTER TABLE car ADD cBusiness INT(4) COMMENT "车的买家"
//    ALTER TABLE car ADD cState VARCHAR(24) DEFAULT "暂无" COMMENT "车的买卖状态"
}
