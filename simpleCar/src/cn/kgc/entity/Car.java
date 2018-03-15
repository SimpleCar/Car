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

    public String getCimage() {
        return cimage;
    }

    public void setCimage(String cimage) {
        this.cimage = cimage;
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
}
