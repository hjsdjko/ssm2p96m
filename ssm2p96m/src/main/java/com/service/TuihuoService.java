package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.TuihuoEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.TuihuoVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.TuihuoView;


/**
 * 退货
 *
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface TuihuoService extends IService<TuihuoEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<TuihuoVO> selectListVO(Wrapper<TuihuoEntity> wrapper);
   	
   	TuihuoVO selectVO(@Param("ew") Wrapper<TuihuoEntity> wrapper);
   	
   	List<TuihuoView> selectListView(Wrapper<TuihuoEntity> wrapper);
   	
   	TuihuoView selectView(@Param("ew") Wrapper<TuihuoEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<TuihuoEntity> wrapper);
   	
}

