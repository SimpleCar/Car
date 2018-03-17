package cn.kgc.service;

import cn.kgc.entity.Business;
import cn.kgc.entity.Car;
import cn.kgc.entity.CarInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author gui
 */
public interface BusinessService {
    //查找某个商家的车
    List<CarInfo> findAllCarInfoByBusiness(@Param("bId") Integer bId);
    //插入车信息
    int addCarInfos(@Param("carInfo") CarInfo carInfo);
    //删除车信息
    int deleteCarInfo(@Param("carId") Integer carId);
    //修改车信息
    int updateCarInfo(@Param("carId") Integer carId);

    int deleteCarInfod(@Param("carInfo") CarInfo carInfo);

    //插入一个商家
    int addBusiness(Business business);
    //根据商家的手机号码和密码查询到该商家
    Business findBusinessbIdByPhoneAndPwd(String phone,String pwd);
    //查询该商家所发布的车
    List<Car> fineCarListByBusiness(int i);
}
