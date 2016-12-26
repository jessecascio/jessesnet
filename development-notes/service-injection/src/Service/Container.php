<?php

namespace Service;

use Symfony\Component\DependencyInjection;

class Container
{
	protected static $Container = null;

	/**
	 * @return Symfony\Component\DependencyInjection\ContainerBuilder
	 */
	public static function instance()
	{
		if (is_null(self::$Container)) {
			self::buildContainer();
		}

		return self::$Container;
	}

	/**
	 * @param Symfony\Component\DependencyInjection\ContainerBuilder
	 */
	public static function setContainer(DependencyInjection\ContainerBuilder $Container)
	{
		self::$Container = $Container;
	}

	/**
	 * Build the container
	 */
	private static function buildContainer()
	{
		$Container = new DependencyInjection\ContainerBuilder();

		$Container->register('transaction', 'Service\Transaction');

		self::$Container = $Container;
	}
	
}