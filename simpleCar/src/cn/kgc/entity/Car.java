package cn.kgc.entity;

import java.io.Serializable;

public class Car implements Serializable {
    private int cid;
    private String cname;
    private float cprice;
    private int cleavel;
    private String cvariety;
    private int cstock;
    private float cmin;
    private float cmax;
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
