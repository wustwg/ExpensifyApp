import _ from 'lodash';
import React from 'react';
import {View} from 'react-native';
import BlockingView from '@components/BlockingViews/BlockingView';
import Icon from '@components/Icon';
import * as Expensicons from '@components/Icon/Expensicons';
import variables from '@styles/variables';
import useThemeStyles from '@styles/useThemeStyles';
import {PendingMapViewProps} from './MapViewTypes';

function PendingMapView({title = '', subtitle = '', style}: PendingMapViewProps) {
    const styles = useThemeStyles();
    const hasTextContent = !_.isEmpty(title) || !_.isEmpty(subtitle);

    return (
        <View style={[styles.mapPendingView, style]}>
            {hasTextContent ? (
                <BlockingView
                    icon={Expensicons.EmptyStateRoutePending}
                    title={title}
                    subtitle={subtitle}
                    shouldShowLink={false}
                />
            ) : (
                <View style={[styles.flex1, styles.alignItemsCenter, styles.justifyContentCenter, styles.ph10]}>
                    <Icon
                        src={Expensicons.EmptyStateRoutePending}
                        width={variables.iconSizeUltraLarge}
                        height={variables.iconSizeUltraLarge}
                    />
                </View>
            )}
        </View>
    );
}

PendingMapView.displayName = 'PendingMapView';

export default PendingMapView;
