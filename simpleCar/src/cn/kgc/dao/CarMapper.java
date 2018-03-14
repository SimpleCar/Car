package cn.kgc.dao;

import cn.kgc.entity.Car;
import org.apache.ibatis.annotations.Param;


import java.util.List;

public interface CarMapper {
    //查跑车
    List<Car> selectCar(Car car);
    //查大于45万以上跑车
    List<Car> selectGreaterThanSuperCar();
    //查豪车
    List<Car> selectGreaterThanLuxuryCar();
    //查跑车条数
    List<Car> selectCarCount(Car car);
    //查大于45万以上跑车的条数
    List<Car> selectGreaterThanSuperCarCount(Car car);
    //查豪车条数
    List<Car>selectGreaterThanLuxuryCarCount(Car car);


}
