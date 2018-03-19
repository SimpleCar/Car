package cn.kgc.service;

import cn.kgc.entity.Car;
import org.apache.ibatis.annotations.Param;


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
    //根据名字查车
    List<Car> selectCarName(Car car);
    //根据名字和首付比例算分期额度
    int selectInstalmentAmount(@Param("instalmentAmount")double instalmentAmount,@Param("cname")String cname );
    //根据名字查询价格
    int selectPrice (Car car);
    //Order表插入用户时,Car表同步更新用户字段
    int updateUser(Car car);


}
