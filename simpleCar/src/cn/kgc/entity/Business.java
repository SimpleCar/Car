package cn.kgc.entity;

/**
 * @author gui
 * 商家实体类
 */
public class Business {
    //商家ID
    private int bId;
    //商家名字
    private String bName;
    //商家密码
    private String bPwd;
    //商家手机号码
    private String bPhone;
    //商家地址
    private String bAdd;
    //商家证件照
    private String imgUrl;
    //商家类别
    private String bType;

    //无参构造方法
    public Business() {
    }
    //有参构造方法
    public Business(int bId, String bName, String bPwd, String bPhone, String bAdd, String imgUrl, String bType) {
        this.bId = bId;
        this.bName = bName;
        this.bPwd = bPwd;
        this.bPhone = bPhone;
        this.bAdd = bAdd;
        this.imgUrl = imgUrl;
        this.bType = bType;
    }
    //set get
    public int getbId() {
        return bId;
    }

    public void setbId(int bId) {
        this.bId = bId;
    }

    public String getbName() {
        return bName;
    }

    public void setbName(String bName) {
        this.bName = bName;
    }

    public String getbPwd() {
        return bPwd;
    }

    public void setbPwd(String bPwd) {
        this.bPwd = bPwd;
    }

    public String getbPhone() {
        return bPhone;
    }

    public void setbPhone(String bPhone) {
        this.bPhone = bPhone;
    }

    public String getbAdd() {
        return bAdd;
    }

    public void setbAdd(String bAdd) {
        this.bAdd = bAdd;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getbType() {
        return bType;
    }

    public void setbType(String bType) {
        this.bType = bType;
    }
//    CREATE TABLE Business(
//            bId INT(24) PRIMARY KEY NOT NULL AUTO_INCREMENT,
//    bName VARCHAR(24) COMMENT "商家名字",
//    bPwd VARCHAR(24) COMMENT "商家密码",
//    bPhone VARCHAR(24) COMMENT "商家手机号码",
//    bAdd VARCHAR(24) COMMENT "商家地址",
//    imgUrl VARCHAR(24) COMMENT "商家证件照",
//    bType VARCHAR(24) COMMENT "商家类别"
//            )CHARSET="utf8" COMMENT "商家信息表";
}
