package cn.kgc.service.impl;

import cn.kgc.dao.CarMapper;

import cn.kgc.entity.Car;
import cn.kgc.service.CarService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.List;

@Service
@RequestMapping("userService")
public class CarServiceImpl implements CarService {
    @Resource
    private CarMapper carMapper;


    @Override
    public List<Car> selectCar(Car car) {

        return carMapper.selectCar(car);
    }

    @Override
    public List<Car> selectAll() {
        return carMapper.selectAll();
    }
}
