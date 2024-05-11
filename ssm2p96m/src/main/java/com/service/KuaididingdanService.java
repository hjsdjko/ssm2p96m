package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.KuaididingdanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.KuaididingdanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.KuaididingdanView;


/**
 * 快递订单
 *
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface KuaididingdanService extends IService<KuaididingdanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<KuaididingdanVO> selectListVO(Wrapper<KuaididingdanEntity> wrapper);
   	
   	KuaididingdanVO selectVO(@Param("ew") Wrapper<KuaididingdanEntity> wrapper);
   	
   	List<KuaididingdanView> selectListView(Wrapper<KuaididingdanEntity> wrapper);
   	
   	KuaididingdanView selectView(@Param("ew") Wrapper<KuaididingdanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<KuaididingdanEntity> wrapper);
   	
}

