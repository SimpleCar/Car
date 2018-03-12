package cn.kgc.utils;

public class PageUtil {

    private int pageIndex = 1;
    private int pageSize = 5;
    private int totalPages;
    private int totalInfo;

    public int getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(int pageIndex) {
        this.pageIndex = pageIndex;
    }
    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getTotalInfo() {
        return totalInfo;
    }

    public void setTotalInfo(int totalInfo) {
        int num = totalInfo/pageSize;
        if(totalInfo%pageSize==0){
            totalPages = num;
        }else{
            totalPages = num+1;
        }
        this.totalInfo = totalInfo;
    }

}
