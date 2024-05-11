package com.dao;

import com.entity.TuihuoEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.TuihuoVO;
import com.entity.view.TuihuoView;


/**
 * 退货
 * 
 * @author 
 * @email 
 * @date 2021-04-06 18:09:59
 */
public interface TuihuoDao extends BaseMapper<TuihuoEntity> {
	
	List<TuihuoVO> selectListVO(@Param("ew") Wrapper<TuihuoEntity> wrapper);
	
	TuihuoVO selectVO(@Param("ew") Wrapper<TuihuoEntity> wrapper);
	
	List<TuihuoView> selectListView(@Param("ew") Wrapper<TuihuoEntity> wrapper);

	List<TuihuoView> selectListView(Pagination page,@Param("ew") Wrapper<TuihuoEntity> wrapper);
	
	TuihuoView selectView(@Param("ew") Wrapper<TuihuoEntity> wrapper);
	
}
