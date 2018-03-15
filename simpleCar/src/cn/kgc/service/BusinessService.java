package cn.kgc.service;

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
}
