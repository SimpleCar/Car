package cn.kgc.entity;

/**
 *用户信用信息
 */
public class CreditInfo {
    private int cid;
    private int uid;//用户Id
    private String profession;//职业
    private String income;//工资收入
    private int socialSecurity;//社保情况：(1,0)：(有，无)
    private int accumulationFund;//公积金:(1,0)：(有，无)
    private String creditRecord;//信用记录
    private String housing;//住房状况

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public int getSocialSecurity() {
        return socialSecurity;
    }

    public void setSocialSecurity(int socialSecurity) {
        this.socialSecurity = socialSecurity;
    }

    public int getAccumulationFund() {
        return accumulationFund;
    }

    public void setAccumulationFund(int accumulationFund) {
        this.accumulationFund = accumulationFund;
    }

    public String getCreditRecord() {
        return creditRecord;
    }

    public void setCreditRecord(String creditRecord) {
        this.creditRecord = creditRecord;
    }

    public String getHousing() {
        return housing;
    }

    public void setHousing(String housing) {
        this.housing = housing;
    }

    @Override
    public String toString() {
        return "CreditInfo{" +
                "cid=" + cid +
                ", uid=" + uid +
                ", profession='" + profession + '\'' +
                ", income='" + income + '\'' +
                ", socialSecurity=" + socialSecurity +
                ", accumulationFund=" + accumulationFund +
                ", creditRecord='" + creditRecord + '\'' +
                ", housing='" + housing + '\'' +
                '}';
    }
}
