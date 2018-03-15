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
    public List<Car> selectGreaterThanSuperCar() {
        return carMapper.selectGreaterThanSuperCar();
    }

    @Override
    public List<Car> selectGreaterThanLuxuryCar() {
        return carMapper.selectGreaterThanLuxuryCar();
    }

    @Override
    public List<Car> selectCarCount(Car car) {
        return carMapper.selectCarCount(car);
    }

    @Override
    public List<Car> selectGreaterThanSuperCarCount(Car car) {
        return carMapper.selectGreaterThanSuperCarCount(car);
    }

    @Override
    public List<Car> selectGreaterThanLuxuryCarCount(Car car) {
        return carMapper.selectGreaterThanSuperCarCount(car);
    }


}