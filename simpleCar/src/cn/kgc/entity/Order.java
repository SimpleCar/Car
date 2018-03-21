package cn.kgc.entity;


import java.util.Date;
import java.util.List;

/**
 * 订单类
 */
public class Order {
    private int oid;//订单id
    private int orderNum;//订单编号：随机生成
    private int bid;//商家ID
    private int uid;//用户ID
    private String createdate;//下单时间
    private int state;//订单状态
    private int cid;  //车的ID
    private List<Car> cars;

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public int getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(int orderNum) {
        this.orderNum = orderNum;
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


    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getCreatedate() {
        return createdate;
    }

    public void setCreatedate(String createdate) {
        this.createdate = createdate;
    }

    @Override
    public String toString() {
        return "Order{" +
                "oid=" + oid +
                ", orderNum=" + orderNum +
                ", bid=" + bid +
                ", uid=" + uid +
                ", createdate='" + createdate + '\'' +
                ", state=" + state +
                ", cid=" + cid +
                ", cars=" + cars +
                '}';
    }
}
