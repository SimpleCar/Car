package cn.kgc.service.impl;

import cn.kgc.dao.CarMapper;
import cn.kgc.dao.OrderMapper;
import cn.kgc.entity.Car;
import cn.kgc.entity.Order;
import cn.kgc.service.CarService;
import cn.kgc.service.OrderService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Service
@RequestMapping("userService")
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderMapper orderMapper;


    @Override
    public int insertOrders(Order order) {
        return orderMapper.insertOrders(order);
    }

    @Override
    public List<Order> selectOrder(Order order) {
        return orderMapper.selectOrder(order);
    }
}
