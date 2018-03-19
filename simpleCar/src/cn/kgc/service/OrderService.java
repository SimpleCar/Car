package cn.kgc.service;


import cn.kgc.entity.Order;

import java.util.List;


public interface OrderService {
    //创建订单
    int insertOrders(Order order);
    //订单显示
    List<Order> selectOrder(Order order);


}
