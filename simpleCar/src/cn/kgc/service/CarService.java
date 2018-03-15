package cn.kgc.service;

import cn.kgc.entity.Car;



import java.util.List;

public interface CarService {
    //查跑车
    List<Car> selectCar(Car car);
    //查大于45万以上跑车
    List<Car> selectGreaterThanSuperCar();
    //查豪车
    List<Car> selectGreaterThanLuxuryCar();
    //查跑车条数
    int selectCarCount(Car car);
    //查大于45万以上跑车的条数
    int selectGreaterThanSuperCarCount();
    //查豪车条数
    int selectGreaterThanLuxuryCarCount();


}
