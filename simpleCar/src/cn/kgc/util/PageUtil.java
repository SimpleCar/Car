package cn.kgc.util;

/**
 * @author gui
 */
public class PageUtil {
    //设置总条数的时候顺便计算总页数

    //当前页
    private int currentNo;
    //页面容量
    private int pageSize;
    //总条数
    private int totalCount;
    //总页数
    private int totalPage;

    //无参数构造方法
    public PageUtil() {
        //super();
    }

    //获取单前页
    public int getCurrentNo() {
        return currentNo;
    }
    //设置当前页
    public void setCurrentNo(int currentNo) {
        this.currentNo = currentNo;
    }
    //获取页面容量
    public int getPageSize() {
        return pageSize;
    }
    //设置页面容量
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
    //获取总条数
    public int getTotalCount() {
        return totalCount;
    }
    //设置总条数的时候顺便计算总页数
    public void setTotalCount(int totalCount) {
        if (totalCount % pageSize ==0) {
            totalPage=totalCount / pageSize;
        }else if (totalCount % pageSize !=0) {
            totalPage=(totalCount / pageSize)+1;
        }
        this.totalCount = totalCount;
    }
    //获取总页数
    public int getTotalPage() {
        return totalPage;
    }
    //设置总页数
    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }
}
