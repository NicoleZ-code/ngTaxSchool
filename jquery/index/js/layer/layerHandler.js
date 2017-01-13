var layerHandler = {

	/**
	 * 提示信息框
	 * @param msg
	 *            提示消息
	 * @param title
	 *            提示标题（默认为 "提示"），默认title下，可为回调函数
	 * @param yes
	 *            按钮回调函数
	 */
	alert : function(msg, title, fn) {

		var icon = -1;
		var isfn1 = (typeof title === 'function');
		var title_default = "提示";
		if(title){
			title_default = isfn1 ? title_default : title;
		}

		var yes = isfn1 ? title : fn;
		
		var _yes = function(index){
			if(yes){
				yes(index);
			}
			layer.close(index);
		};

		// 判断是否是回调函数
		var conf = {
			title : [ title_default, 'border:#ccc;color:#555;'],  // title背景色
			dialog : {
				msg : msg,
				type : icon,
//				btns: 2,
//				btn: ['重要','奇葩'],
				yes : _yes
			},
			area : [ '250px', 'auto' ]
/*			area : [ '250px', '150px' ]*/
		};

		$.layer(conf);

	},	
	
	dialog : function(viewid){
		var conf = {
				 type: 1,   //0-4的选择,（1代表page层）
				 area: ['auto', 'auto'],
				 title: [
				        "提示 ",
				        'border:none;' //title背景色
				    ],
				bgcolor: '#fff', //设置层背景色
				page: {
				    	dom: viewid 
				    }
		   };
			$.layer(conf);
	}
	
//	prompt : function(options, fn){
//		window.top.$.layer.prompt({title: options.title}, function(name){
//			fn();
//		});
//	}
	

};