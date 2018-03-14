package cn.kgc.dao;

import cn.kgc.entity.Car;
import org.apache.ibatis.annotations.Param;


import java.util.List;

public interface CarMapper {
    List<Car> selectCar(Car car);

    List<Car> selectAll();


}
