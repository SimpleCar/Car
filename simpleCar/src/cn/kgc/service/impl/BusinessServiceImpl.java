package cn.kgc.service.impl;

import cn.kgc.dao.BusinessMapper;
import cn.kgc.entity.Business;
import cn.kgc.entity.Car;
import cn.kgc.entity.CarInfo;
import cn.kgc.service.BusinessService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author gui
 * 实现类
 */
@Service
public class BusinessServiceImpl implements BusinessService {
    //alt+enter是自动提示
    //ctrl+alt+L是展开代码行
    @Resource
    private BusinessMapper businessMapper;

    @Override
    //查找某个商家的车
    public List<CarInfo> findAllCarInfoByBusiness(Integer bId) {
        return businessMapper.findAllCarInfoByBusiness(bId);
    }

    @Override
    //插入车信息
    public int addCarInfos(CarInfo carInfo) {
        System.out.println("实现类"+carInfo.toString());
        return businessMapper.addCarInfos(carInfo);
    }

    @Override
    //删除车信息
    public int deleteCarInfo(Integer carId) {
        return businessMapper.deleteCarInfo(carId);
    }

    @Override
    public int deleteCarInfod(CarInfo carInfo) {
        return businessMapper.deleteCarInfod(carInfo);
    }


    @Override
    //修改车信息
    public int updateCarInfo(Integer carId) {
        return businessMapper.updateCarInfo(carId);
    }


    @Override
    //插入一个商家
    public int addBusiness(Business business) {
        return businessMapper.addBusiness(business);
    }

    @Override
    public Business findBusinessbIdByPhone(String phone) {
        return businessMapper.findBusinessbIdByPhone(phone);
    }


    @Override
    //查询该商家所发布的车
    public List<Car> fineCarListByBusiness(int i) {
        return businessMapper.fineCarListByBusiness(i);
    }

}
