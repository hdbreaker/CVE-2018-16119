var menuList = new Array(
//	url							display	level			string
//	url:	url to visite when click on this menu item. it's not full path, but only filename.
//		if it's not null, must be one and only; else if it's null, that means it has branches, and the actual url is the one of its first visitable branches.
//	display: must be 0. 
//	directory level: 0: directory has no branches;  1: directory level 1;  2:level 2;   and so on
	"StatusRpm", 				    0,		0,  		    str_menu.status,	
	"WzdStartRpm", 				0,		0, 	 		str_menu.wizard,
    "WpsCfgRpm",                0,      0,          str_menu.wpsCfg,
	//add by zhanglipeng 2010-01-06
	"WorkingModeRpm",				0,		0,			str_menu.workingModeRpm,
	//end add 2010-01-06
	"", 		    			0,		1,   	    str_menu.ntwMain,
	"WanCfgRpm", 			        0,		2,  	    str_menu.ntwWan,
	"NetworkCfgRpm", 		   		0,		2,  	    str_menu.ntwLan,
	"WanOnlineDetectCfgRpm", 		0,		2,  	    str_menu.ntwService,  
	"MacCloneCfgRpm",        		0,		2,  	    str_menu.ntwMacClone,	
	"FlowBalanceRpm", 	    	0,		2,  	    str_menu.ntwFlowBalace,
	"BandCtrlCfgRpm",         	0,		2,  	    str_menu.ntwBandWidth,
	"VLANCfgRpm", 		    	0,		2,  	    str_menu.ntwVlan,
	"PortmonitorCfgRpm",      	    0,		2,  	    str_menu.ntwPrtMonitor,
	"BalancePolicyRpm",			0,		2,			str_menu.wanBalancePolicy,
	"WanPortParaRpm",				0,		2, 	 		str_menu.ntwPrtPara,
	"WlanBandRpm",				0,		0,			str_menu.band,
	"", 						0,		1, 		    str_menu.wlanMain_2g,
	"WlanNetworkRpm", 	    	0,		2,          str_menu.wlanNetwork,
	/*"WpsCfgRpm",                 0,      2,          str_menu.wpsCfg,*/
	//add by zhanglipeng 2010-01-26, For display apc router page
	"WlanNetworkRpm_APC",			0,		2,			str_menu.wlanNetwork,
	//end add 2010-01-26
    "WlanSecurityRpm", 	    	0,		2, 	        str_menu.wlanSecurityRpm,
	"WlanMacFilterRpm",       	    0,		2, 	        str_menu.wlanMacFlt,
    "WlanAdvRpm",                 0,      2,          str_menu.wlanAdvCfg, 
	"WlanStationRpm", 	    	0,		2, 	        str_menu.wlanStation,
/* add for 5G, ly 110902 */
	"", 						0,		1, 		    str_menu.wlanMain_5g,
	"WlanNetworkRpm_5g", 	    	0,		2,          str_menu.wlanNetwork,
	"WpsCfgRpm_5g",                 0,      2,          str_menu.wpsCfg,
    "WlanSecurityRpm_5g", 	    	0,		2, 	        str_menu.wlanSecurityRpm,
	"WlanMacFilterRpm_5g",       	    0,		2, 	        str_menu.wlanMacFlt,
    "WlanAdvRpm_5g",                 0,      2,          str_menu.wlanAdvCfg, 
	"WlanStationRpm_5g", 	    	0,		2, 	        str_menu.wlanStation,
/* add end, ly 110902 */
    "", 						0,		1, 	 	    str_menu.dhcpServerMain,
	"LanDhcpServerRpm", 	    	0,		2,  	    str_menu.dhcpServer,
	"AssignedIpAddrListRpm",		0,		2,  	    str_menu.dhcpList,
	"FixMapCfgRpm", 		    	0,		2,  	    str_menu.dhcpFixMap,
	"",								0,		1,			str_menu.nasMain,
	"NasCfgRpm",					0,		2,			str_menu.nasCfg,
	"NasFtpCfgRpm",				0,		2,			str_menu.nasFtpCfg,
	
	/* for media server display add  by HouXB, 16Sep10 */
	"MediaServerCfgRpm",			0,		2,			str_menu.nasMediaSvCfg,
	/* end add by HouXB, 16Sep10 */
	"PrintServerCfgRpm",				0,		2,			str_menu.nasPrintSvCfg,
	"NasUserCfgRpm",				0,		2,			str_menu.nasUserCfg,

	//add by hwz,2010-11-22
	"NatCfgRpm",                 0,      0,          str_menu.nat,
	"NatStatusCfgRpm",            0,      0,          str_menu.natStatus,
	
	"", 						0,		1,  	    str_menu.frwVrtMain,
	"VirtualServerRpm",       	    0,		2,  	    str_menu.frwVrtServer,
	"SpecialAppRpm", 	        	0,		2,  	    str_menu.frwSpcApp,
	"DMZRpm",					0,		2,  	    str_menu.frwDMZ,        
	"UpnpCfgRpm",	           		0,		2,  	    str_menu.frwUpnp,
	"",								0,		1,		str_menu.securityMain,
	"BasicSecurityRpm",			0,		2,			str_menu.basicSecurity,
	"AdvScrRpm",               		0,		2,  	str_menu.scrAdvScr,
	"LocalManageControlRpm",	0,		2,			str_menu.localManageControl,
	"ManageControlRpm", 			0,		2, 		str_menu.sysManageCnt,
	
	"ParentCtrlRpm",				0,		0,		str_menu.parentCtrl,
	"",								0,		1,		str_menu.accCtrlMain,
	"AccessCtrlAccessRulesRpm",		0,		2,		str_menu.accCtrlMan,
	"AccessCtrlHostsListsRpm",		0,		2,		str_menu.accCtrlHost,
	"AccessCtrlAccessTargetsRpm",	0,		2,		str_menu.accCtrlTarget,
	"AccessCtrlTimeSchedRpm",		0,		2,		str_menu.accCtrlTime,
	"",    						0,		1, 	  		str_menu.staRoute,
	"StaticRouteTableRpm",    		0,		2, 	  		str_menu.staRouteTable,
	"SysRouteTableRpm",    		0,		2, 	  		str_menu.sysRouteTable,
	"",							0,		1, 	 	    str_menu.sessionMain,
	"SessionLimitRpm",			    0,		2, 	 	    str_menu.sessionLimit,
	"SessionListRpm",				0,		2, 	 	    str_menu.sessionList,
   	"",							0,		1, 	 	    str_menu.QosCfgMain,
	"QoSCfgRpm",					0,		2, 	 	    str_menu.QosCfg,	
	"QoSRuleListRpm",				0,		2, 	 	    str_menu.QosRuleList,
    "",						    0,		1, 	        str_menu.lanArpMain,	
	"LanArpBindingRpm",			0,		2, 	 		str_menu.lanArpBind,
	"LanArpBindingListRpm",		0,		2, 	        str_menu.lanArpList,
    "DdnsAddRpm",				   	0,		0, 	   		str_menu.ddnsAddMain,
	"",							0,		1,		    str_menu.swtMain,
	"PortStatisticsRpm",			0,		2, 	 	    str_menu.swtPortSta,
	"PortMirrorRpm",  			0,		2,	 		str_menu.swtPortMirror,
	"PortRateControlRpm",			0,		2, 	 	    str_menu.swtPortRateSet,
	"PortParaRpm",  				0,		2, 	        str_menu.swtPortPara,
	"PortStatusRpm",  			0,		2, 	 	    str_menu.swtPortStatus,
    "PortBasedVLANRpm",		 	0,		2, 	 	    str_menu.swtPortBaseVlan,
	//added by ZQQ 11.03.17
	"",							0,		1, 	 	    str_menu.ipv6Conf,		
	"IPv6StatusRpm",		0,		2,			str_menu.ipv6Lan,
	"WanIpv6CfgRpm",		0,		2,			str_menu.ipv6Wan,
	//end added by ZQQ 11.03.17
	"",							0,		1, 	 	    str_menu.systoolMain,
	"DateTimeCfgRpm",				0,		2,  	    str_menu.sysTime,
    "DiagnosticRpm",              0,      2,          str_menu.sysDiagnostic,
	"SoftwareUpgradeRpm",			0,		2,  	    str_menu.sysSoftUpgrade,
	"RestoreDefaultCfgRpm",		0,		2,  	    str_menu.sysRstDefault,
	"BakNRestoreRpm",				0,		2,          str_menu.sysBackupRst,
	"SysRebootRpm",				0,		2,  	    str_menu.sysReboot,
	"ChangeLoginPwdRpm",			0,		2,  	    str_menu.sysPassword,
	"SystemLogRpm",				0,		2,  	    str_menu.sysLog,		
	"SysLogSetRpm",				0,		2, 	 		str_menu.sysLogSet,
	"SystemStatisticRpm",			0,		2,  		str_menu.sysSta,
	"WanSpeedDetectRpm",			0,		2,			str_menu.wanSpdDet,
	"NatShowRpm",					0,		2,			str_menu.natShow,
	"NatSrcPortSettingRpm",		0,		2,			str_menu.natSrcPortSetting,
	"MainRpm",					0,		0,	 		str_menu.ProductMain			
);                            

var map = new Array();

function menuInit(option)
{
	for (var i = 0; i < option.length; i++)
	{
		if ( option[i] == 0 )
		{
			continue;
		}
		for (var n = 0; n < menuList.length; n +=4 )
		{
			if ( menuList[n] == option[i] )
			{
				menuList[n+1] = 1;
				break;
			}
		}
	}
	n = menuList.length - 4;
	var url = "";
	var level = 0;
	while (n >= 0)
	{
		if ( menuList[n+1] == 1 && menuList[n+2] > 0)
		{
			url = menuList[n];
			level = menuList[n+2];
		}
		else if ( menuList[n+2] > 0 && menuList[n+2] < level )
		{
			menuList[n] = url;
			menuList[n+1] = 1;
			level = menuList[n+2];
		}
		n -= 4;
	}
}

function menuDisplay()
{
	var i = 0;
	var className;
	for (var n = 0; n < menuList.length; n +=4  )
	{
		if ( menuList[n+1] != 1 )
		{
			continue;
		}
		if (menuList[n+2] == 0)
		{
			className = "dot1";
			display = "block";
		}
		else if ( (menuList[n+2] > 0) && (menuList[n+4+2] > menuList[n+2]) )
		{
			className = "plus";
			if ( menuList[n+2] == 1 )
			{
				display = "block";
			}
			else
			{
				display = "none";
			}
		}
		else
		{
			className = "dot2";
			display = "none";
		}
		var power = (menuList[n+2] > 0)?(menuList[n+2] - 1):0;
		document.write('<ol id=ol'+i+' class='+className+' style="display:'+display+'; background-position:2px;PADDING-LEFT:2px;"><A id=a'+i+' href="/userRpm/'+menuList[n]+'.htm" target=mainFrame class=L1 onClick="doClick('+i+');">'+((power > 0)? '- ':'')+menuList[n+3]+'</a></ol>');
		//added by zqq,07.11.1
        //map.push(menuList[n+2]);
        map[map.length] = menuList[n+2];
		i++;
	}


}

function collapseAll()
{
	var e;
	for(var i=0;;i++)
	{
		try{
			if(map[i] > 1)
			{
				document.getElementById('ol'+i).style.display = "none";
			}
			if(document.getElementById('ol'+i).className == "minus")
			{
				document.getElementById('ol'+i).className = "plus";
			}
		}
		catch(e)
		{
			break;
		}
	}
	for(var i=0;i<document.links.length;i++)
	{
		document.links[i].className = "L1";
	}
}

function expandBranch(n)
{
	var branch;
	var l = 0;
	var index;
	while( l != 1 )
	{
		branch = document.getElementById('ol'+n);
		l = map[n];
		index = n;
		if (branch.className == "plus")
		{
			branch.className = "minus";
		}
		else
		{
			while(1)
			{
				if (map[index] != l - 1)
					index--;
				else 
					break;
			}
			branch = document.getElementById('ol'+index);
			branch.className = "minus";
		}
		n = index;
		l = map[n];
		while(1)
		{
			index++;
			if(index >= map.length)
			{
				break;
			}
			branch = document.getElementById('ol'+index);
			if (map[index] == (l + 1))
			{
				branch.style.display = "block";
			}
			else if (map[index] <= l)
			{
				break;
			}
		}
	}
}

function doClick(n)
{
	var e;
	collapseAll();
	obj = document.getElementById('ol'+n);
	if (obj.className == "plus")
	{
		document.getElementById('a'+(n+1)).className = "L2";
	}
	else
	{
		document.getElementById('a'+n).className = "L2";
	}
	if (map[n] > 0)
		expandBranch(n);
}
