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

    //无参构造方法
    public Business() {
    }

    //有参构造方法
    public Business(int bId, String bName, String bPwd, String bPhone) {
        this.bId = bId;
        this.bName = bName;
        this.bPwd = bPwd;
        this.bPhone = bPhone;
    }

    //toString
    @Override
    public String toString() {
        return "Business{" +
                "bId=" + bId +
                ", bName='" + bName + '\'' +
                ", bPwd='" + bPwd + '\'' +
                ", bPhone='" + bPhone + '\'' +
                '}';
    }

    //set和get方法
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

//    CREATE TABLE Business(
//            bId INT(24) PRIMARY KEY NOT NULL AUTO_INCREMENT,
//    bName VARCHAR(24) COMMENT "商家名字",
//    bPwd VARCHAR(24) COMMENT "商家密码",
//    bPhone VARCHAR(24) COMMENT "商家手机号码"
//            )CHARSET="utf8" COMMENT "车的信息表";
}
