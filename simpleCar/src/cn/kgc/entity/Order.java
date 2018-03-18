package cn.kgc.entity;

import java.util.Date;

/**
 * 订单类
 */
public class Order {
    private int oid;//订单id
    private int oderNum;//订单编号：随机生成
    private int bid;//商家ID
    private int uid;//用户ID
    private Date date;//下单时间
    private int state;//订单状态
    private int cid;  //车的ID

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public int getBid() {
        return bid;
    }

    public void setBid(int bid) {
        this.bid = bid;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getOderNum() {
        return oderNum;
    }

    public void setOderNum(int oderNum) {
        this.oderNum = oderNum;
    }

    @Override
    public String toString() {
        return "Order{" +
                "oid=" + oid +
                ", oderNum=" + oderNum +
                ", bid=" + bid +
                ", uid=" + uid +
                ", date=" + date +
                ", state=" + state +
                ", cid=" + cid +
                '}';
    }
}
