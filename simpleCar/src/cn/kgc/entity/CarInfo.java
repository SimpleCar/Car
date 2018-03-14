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
    private double carPrice;
    //车的级别也就是类型
    private String carLevel;
    //首付金额
    private double carFirstPay;
    //分几期
    private int carPayNumber;
    //减去首付还该支付多少钱？
    private double carLastPay;
    //车的描述
    private String carDesc;
    //车的状态
    private String carState;
    //商家
    private String business;
    //车的照片路径
    private String imgUrl;

    //无参构造方法
    public CarInfo() {
    }

    //有参数构造方法
    public CarInfo(int carId, String carName, String carBrand, double carPrice, String carLevel, double carFirstPay, int carPayNumber, double carLastPay, String carDesc, String carState, String business, String imgUrl) {
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
        this.business = business;
        this.imgUrl = imgUrl;
    }

    //toString
    @Override
    public String toString() {
        return "CarInfo{" +
                "carId=" + carId +
                ", carName='" + carName + '\'' +
                ", carBrand='" + carBrand + '\'' +
                ", carPrice=" + carPrice +
                ", carLevel='" + carLevel + '\'' +
                ", carFirstPay=" + carFirstPay +
                ", carPayNumber=" + carPayNumber +
                ", carLastPay=" + carLastPay +
                ", carDesc='" + carDesc + '\'' +
                ", carState='" + carState + '\'' +
                ", business='" + business + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                '}';
    }

    //set get
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

    public double getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(double carPrice) {
        this.carPrice = carPrice;
    }

    public String getCarLevel() {
        return carLevel;
    }

    public void setCarLevel(String carLevel) {
        this.carLevel = carLevel;
    }

    public double getCarFirstPay() {
        return carFirstPay;
    }

    public void setCarFirstPay(double carFirstPay) {
        this.carFirstPay = carFirstPay;
    }

    public int getCarPayNumber() {
        return carPayNumber;
    }

    public void setCarPayNumber(int carPayNumber) {
        this.carPayNumber = carPayNumber;
    }

    public double getCarLastPay() {
        return carLastPay;
    }

    public void setCarLastPay(double carLastPay) {
        this.carLastPay = carLastPay;
    }

    public String getCarDesc() {
        return carDesc;
    }

    public void setCarDesc(String carDesc) {
        this.carDesc = carDesc;
    }

    public String getCarState() {
        return carState;
    }

    public void setCarState(String carState) {
        this.carState = carState;
    }

    public String getBusiness() {
        return business;
    }

    public void setBusiness(String business) {
        this.business = business;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
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
//    carState VARCHAR(24) DEFAULT "未卖出" COMMENT"车的卖出状态",
//    business VARCHAR(24) COMMENT"商家是谁",
//    imgUrl VARCHAR(24) COMMENT"车的照片"
//            )CHARSET="utf8" COMMENT"车的信息表";
}