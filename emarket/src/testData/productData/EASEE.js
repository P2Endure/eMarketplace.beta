export default { surface:  `
        Material,
        TRC_Layer, 	              ! Name
        Rough,           			    ! Roughness (*)
        0.014,            			  ! Thickness {m}
        2,           			        ! Conductivity {W/m-K}
        2400,              			  ! Density {kg/m3}
        1000,            			    ! Specific Heat {J/kg-K}
        0.9,                      !- Thermal Absorptance
        0.75,                     !- Solar Absorptance
        0.75;                     !- Visible Absorptance
        
        Material,
        EPS_250, 	               ! Name
        Rough,           			   ! Roughness (*)
        0.01,            			   ! Thickness {m}
        0.034,           			   ! Conductivity {W/m-K}
        28,              			   ! Density {kg/m3}
        1400,            			   ! Specific Heat {J/kg-K}
        0.9,                     !- Thermal Absorptance
        0.75,                    !- Solar Absorptance
        0.75;                    !- Visible Absorptance

        Material,
        TRC_Layer, 	              ! Name
        Rough,           			    ! Roughness (*)
        0.014,            			  ! Thickness {m}
        2,           			        ! Conductivity {W/m-K}
        2400,              			  ! Density {kg/m3}
        1000,            			    ! Specific Heat {J/kg-K}
        0.9,                      !- Thermal Absorptance
        0.75,                     !- Solar Absorptance
        0.75;                     !- Visible Absorptance
        `,

 wallConstruction: `
        ! Name
        ! Outside Layer
        Construction,
        C09_Basic_Wall_Foam_concrete,             !- Name
        TRC_layer,                                !- Outside Layer
        EPS_250,                                  !- Layer 2
        TRC_Layer,                                !- Layer 3
        `          
}