package cn.kgc.dao;

import cn.kgc.entity.Business;
import cn.kgc.entity.Car;
import cn.kgc.entity.CarInfo;
import cn.kgc.entity.Order;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author gui
 * 商家接口
 */
public interface OrderMapper {
    //创建订单
    int insertOrders(Order order);
    //订单显示
    List<Order> selectOrder(Order order);
}
