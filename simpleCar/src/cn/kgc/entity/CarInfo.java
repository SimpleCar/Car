package cn.kgc.entity;

/**
 * @author gui
 * 车信息类 该实体类的创表语句在最下面 拉到最后面可以看到
 */
public class CarInfo {
    //车ID
    private int carId;
    //车的名字
    private String carName;
    //车的品牌
    private String carBrand;
    //车的价格
    private String carPrice;
    //车的级别也就是类型
    private String carLevel;
    //首付金额
    private String carFirstPay;
    //分几期
    private String carPayNumber;
    //减去首付还该支付多少钱？
    private String carLastPay;
    //车的描述
    private String carDesc;
    //车的状态
    private int carState;

    //无参构造方法
    public CarInfo() {
    }

    //有参构造方法
    public CarInfo(int carId, String carName, String carBrand, String carPrice, String carLevel, String carFirstPay, String carPayNumber, String carLastPay, String carDesc, int carState) {
        this.carId = carId;
        this.carName = carName;
        this.carBrand = carBrand;
        this.carPrice = carPrice;
        this.carLevel = carLevel;
        this.carFirstPay = carFirstPay;
        this.carPayNumber = carPayNumber;
        this.carLastPay = carLastPay;
        this.carDesc = carDesc;
        this.carState = carState;
    }

    //toString方法
    @Override
    public String toString() {
        return "CarInfo{" +
                "carId=" + carId +
                ", carName='" + carName + '\'' +
                ", carBrand='" + carBrand + '\'' +
                ", carPrice='" + carPrice + '\'' +
                ", carLevel='" + carLevel + '\'' +
                ", carFirstPay='" + carFirstPay + '\'' +
                ", carPayNumber='" + carPayNumber + '\'' +
                ", carLastPay='" + carLastPay + '\'' +
                ", carDesc='" + carDesc + '\'' +
                ", carState=" + carState +
                '}';
    }

    //set和get方法

    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public String getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(String carPrice) {
        this.carPrice = carPrice;
    }

    public String getCarLevel() {
        return carLevel;
    }

    public void setCarLevel(String carLevel) {
        this.carLevel = carLevel;
    }

    public String getCarFirstPay() {
        return carFirstPay;
    }

    public void setCarFirstPay(String carFirstPay) {
        this.carFirstPay = carFirstPay;
    }

    public String getCarPayNumber() {
        return carPayNumber;
    }

    public void setCarPayNumber(String carPayNumber) {
        this.carPayNumber = carPayNumber;
    }

    public String getCarLastPay() {
        return carLastPay;
    }

    public void setCarLastPay(String carLastPay) {
        this.carLastPay = carLastPay;
    }

    public String getCarDesc() {
        return carDesc;
    }

    public void setCarDesc(String carDesc) {
        this.carDesc = carDesc;
    }

    public int getCarState() {
        return carState;
    }

    public void setCarState(int carState) {
        this.carState = carState;
    }

//    CREATE TABLE CarInfo(
//            carId INT(24) PRIMARY KEY NOT NULL AUTO_INCREMENT,
//    carName VARCHAR(24) COMMENT"车的名字",
//    carBrand VARCHAR(24) COMMENT"车的品牌",
//    carPrice VARCHAR(24) DEFAULT "0.00" COMMENT"车的价格",
//    carLevel VARCHAR(24) COMMENT"车的级别也就是类型",
//    carFirstPay VARCHAR(24) DEFAULT "0.00" COMMENT"车的首付金额",
//    carPayNumber VARCHAR(24) DEFAULT "0" COMMENT"分几期",
//    carLastPay VARCHAR(24) DEFAULT "0.00" COMMENT"减去首付还该支付多少钱",
//    carDesc VARCHAR(24) COMMENT"车的描述信息",
//    carState VARCHAR(24) DEFAULT "未卖出" COMMENT"车的卖出状态"
//            )CHARSET="utf8" COMMENT"车的信息表";
}