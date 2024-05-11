package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.LiuyanEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.LiuyanVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.LiuyanView;


/**
 * 留言
 *
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface LiuyanService extends IService<LiuyanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<LiuyanVO> selectListVO(Wrapper<LiuyanEntity> wrapper);
   	
   	LiuyanVO selectVO(@Param("ew") Wrapper<LiuyanEntity> wrapper);
   	
   	List<LiuyanView> selectListView(Wrapper<LiuyanEntity> wrapper);
   	
   	LiuyanView selectView(@Param("ew") Wrapper<LiuyanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<LiuyanEntity> wrapper);
   	
}

