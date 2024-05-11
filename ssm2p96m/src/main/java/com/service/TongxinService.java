package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.TongxinEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.TongxinVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.TongxinView;


/**
 * 通信
 *
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface TongxinService extends IService<TongxinEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<TongxinVO> selectListVO(Wrapper<TongxinEntity> wrapper);
   	
   	TongxinVO selectVO(@Param("ew") Wrapper<TongxinEntity> wrapper);
   	
   	List<TongxinView> selectListView(Wrapper<TongxinEntity> wrapper);
   	
   	TongxinView selectView(@Param("ew") Wrapper<TongxinEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<TongxinEntity> wrapper);
   	
}

