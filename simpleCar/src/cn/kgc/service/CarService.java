package cn.kgc.service;

import cn.kgc.entity.Car;



import java.util.List;

public interface CarService {
    List<Car> selectCar(Car car);
    List<Car> selectAll();


}
